import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useAccount } from "wagmi";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";
import { useSignMessage, useNetwork, useDisconnect } from "wagmi";
import { SiweMessage } from "siwe";

const APIContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [state, setState] = useState({});

//wagmi state
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const useUser = () => {
    const { data, error, isLoading } = useSWR(`/api/user`, fetcher);
    return {
      user: data,
      isLoading,
      isError: error,
    };
  };

  let { user: fetchedUser } = useUser();
  
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
      if (!address || !chainId) return;

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
          setState((prevState) => ({ ...prevState, address }))
          
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
                setState((prevState) => ({ ...prevState, address }))
                
              })
              .catch((error) => {
                console.error("Error creating user:", error);
                setState((prevState) => ({ ...prevState, error }))
              });
          } else {
            console.error("Error fetching user:", error);
            setState((prevState) => ({ ...prevState, error }))
          }
        });      
      
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        nonce: undefined,
      }));
      setState((prevState) => ({ ...prevState, error }))
      fetchNonce();
    }
  };
 

  useEffect(() => {
    if (fetchedUser) {
      
      if (fetchedUser.newUser) {
        const { wallet: address } = fetchedUser.newUser;
        setUser(fetchedUser.newUser);
        setState((prevState) => ({ ...prevState, address }));
      } else {
        const { wallet: address } = fetchedUser.user;
        setUser(fetchedUser.user);
        setState((prevState) => ({ ...prevState, address }));
      }
    }
  }, [fetchedUser]);

  return (
    <APIContext.Provider
      value={{
        user,
        state,
        setState,
        setUser,
        useUser,
        signIn,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
