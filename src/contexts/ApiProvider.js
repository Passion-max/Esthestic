import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useAccount } from "wagmi";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";

const APIContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [state, setState] = useState({});
  const { address } = useAccount();

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
  
 console.log(user)

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
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
