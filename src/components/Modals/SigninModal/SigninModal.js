import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useAPI } from '@/contexts/ApiProvider';
import { useAccount, default as wagmi } from "wagmi";
import { useSignMessage, useNetwork, useDisconnect, useConnect, chain  } from "wagmi";
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { useWeb3Modal } from '@web3modal/react'
import { goerli, mainnet } from 'wagmi/chains'
import { SiweMessage } from "siwe";
import axios from "axios";

function SignInButton({ onSuccess, onError, onShow }) {
    const { state, setState, user, setUser } = useAPI();
    const [show, setShow] = useState(true);
    const { address } = useAccount();
    const { chain } = useNetwork();
    const { signMessageAsync } = useSignMessage();
    const { disconnect } = useDisconnect();

    const { isOpen, open, close } = useWeb3Modal()

   

    const fetchNonce = async () => {
      try {
        const nonceRes = await fetch("/api/nonce");
        const nonce = await nonceRes.text();
        setState((prevState) => ({ ...prevState, nonce }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, error }));
      }
    };
  
    useEffect(() => {
      fetchNonce();
    }, []);
  
    let signInMsg = `Sign in to use EsthesticOptics
  
  This request will not trigger a blockchain transaction or cost any gas fees.Your authentication status will reset after 24 hours
  `;
  
    const signIn = async () => {
      try {
        const chainId = chain?.id;
        if (!address || !chainId) {
            open();
            onShow();
         }else {
  
        setState((prevState) => ({ ...prevState, loading: true, msg: 'Signing...' }));
        const message = new SiweMessage({
          domain: window.location.host,
          address,
          statement: signInMsg,
          uri: window.location.origin,
          version: "1",
          chainId,
          nonce: state.nonce,
        });
        const signature = await signMessageAsync({
          message: message.prepareMessage(),
        });
  
        const verifyRes = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message, signature }),
        });
        if (!verifyRes.ok) throw new Error("Error verifying message");
        setState((prevState) => ({ ...prevState, loading: true, msg: 'Checking user...' }));
        axios
          .get(`/api/users?wallet=${address}`)
          .then((response) => {
            console.log("User exists:", response.data);
            setUser(response.data);
            setState((prevState) => ({ ...prevState, loading: false }));
            onSuccess({ address });
            setShow(false);
          })
          .catch((error) => {
            // If the user does not exist, make a POST request to create the user
            if (error.response.status === 404) {
              setState((prevState) => ({ ...prevState, loading: true, msg: 'Creating user...' }));
              axios
                .post(`/api/users`, { wallet: address })
                .then((response) => {
                  console.log("User created:", response.data);
                  setUser(response.data);
                  setState((prevState) => ({ ...prevState, loading: false }));
                  onSuccess({ address });
                  setShow(false);
                })
                .catch((error) => {
                  console.error("Error creating user:", error);
                });
            } else {
              console.error("Error fetching user:", error);
            }
          });     
        } 
        
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          nonce: undefined,
        }));
        onError({ error });
        fetchNonce();
      }
    };
  
  
  
    return (
      <button
        disabled={!state.nonce || state.loading}
        onClick={signIn}
        className="sc-button ml-5 style-2"
      >
        {state.loading?<span>{state.msg}</span>:<span>Accept/Sign in</span>}
        
      </button>
    );
  }
export default function SigninModal( {onshow} )  {
    const { state, setState, user, setUser } = useAPI();
    const [show, setShow] = useState(true); 
    const { disconnect } = useDisconnect();
    

    const signOut = async () => {
        await fetch("/api/logout");
        setState({});
        setUser({});
      };

    const handleClose = () => {
        signOut();
        disconnect();
        onshow(false)
      };

      useEffect(() => {
        if (state.error) {
          handleClose();
        }
      }, [state.error]);

      
    
  return (
    <>
      
      <Modal
        backdrop="static"
        centered
        className="modal fade popup"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className="m-5 pt-5">
          <div className="text-center mt-5 pt-2">
            <a href="/" rel="home" className="main-logo">
              <img
                id="logo_header"
                src="assets/images/logo/logo_dark.png"
                alt="nft-gaming"
                width="100%"
                height="100%"
                data-retina="assets/images/logo/logo_dark@2x.png"
                data-width="200px"
                data-height="450px"
              />
            </a>
          </div>
          <h4 className="text-center my-3" style={{ fontSize: "30px" }}>
            Sign in to continue
          </h4>
          <p className="text-center px-4 py-2" style={{ lineHeight: "15px" }}>
            By connectiong your wallet and using EsthesticOptics, you agree to
            our terms of service and Privacy Policy
          </p>
          <div className="card-bottom  text-center">
            <button className="sc-button style-2" onClick={() => onshow(false)}>
              <span>Cancel</span>
            </button>
            <SignInButton
              onSuccess={({ address }) =>
                setState((prevState) => ({ ...prevState, address }))
              }
              onError={({ error }) =>
                setState((prevState) => ({ ...prevState, error }))
              }

              onShow={() => onshow(false) }
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
