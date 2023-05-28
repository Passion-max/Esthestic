import React, { useState, useEffect } from 'react'
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'

function SignInButton({ onSuccess, onError }) {
  const [state, setState] = useState({})

  const fetchNonce = async () => {
    try {
      const nonceRes = await fetch('/api/nonce')
      const nonce = await nonceRes.text()
      setState(prevState => ({ ...prevState, nonce }))
    } catch (error) {
      setState(prevState => ({ ...prevState, error }))
    }
  }

  useEffect(() => {
    fetchNonce()
  }, [])

  const { address } = useAccount()
  const { chain } = useNetwork()
  const { signMessageAsync } = useSignMessage()

  const signIn = async () => {
    try {
      const chainId = chain?.id
      if (!address || !chainId) return

      setState(prevState => ({ ...prevState, loading: true }))
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce: state.nonce,
      })
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })

      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature }),
      })
      if (!verifyRes.ok) throw new Error('Error verifying message')

      setState(prevState => ({ ...prevState, loading: false }))
      onSuccess({ address })
    } catch (error) {
      setState(prevState => ({ ...prevState, loading: false, nonce: undefined }))
      onError({ error })
      fetchNonce()
    }
  }

  return (
    <button disabled={!state.nonce || state.loading} onClick={signIn}>
      Sign-In with Ethereum
    </button>
  )
}

export function Profile() {
  const { isConnected } = useAccount()

  const [state, setState] = useState({})

  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch('/api/me')
        const json = await res.json()
        setState(prevState => ({ ...prevState, address: json.address }))
      } catch (_error) {}
    }

    handler()

    window.addEventListener('focus', handler)
    return () => window.removeEventListener('focus', handler)
  }, [])

  if (isConnected) {
    return (
      <div>
        {state.address ? (
          <div>
            <div>Signed in as {state.address}</div>
            <button
              onClick={async () => {
                await fetch('/api/logout')
                setState({})
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <SignInButton
            onSuccess={({ address }) => setState(prevState => ({ ...prevState, address }))}
            onError={({ error }) => setState(prevState => ({ ...prevState, error }))}
          />
        )}
      </div>
    )
  }

  return <div>{/* Connect wallet content goes here */}</div>
}
