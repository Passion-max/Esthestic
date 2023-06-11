import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useAccount } from 'wagmi'
import { PrismaClient } from '@prisma/client'
import axios from "axios";
import useSWR from 'swr'


const APIContext = createContext();


export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [state, setState] = useState({})
  const {address} = useAccount()

  const fetcher = url => axios.get(url).then(res => res.data)

  const useUser = () => {
    const { data, error, isLoading } = useSWR(`/api/user`, fetcher)
    return {
      user: data,
      isLoading,
      isError: error
    }
  }

  const { user: fetchedUser } = useUser();
  

  useEffect(() => {
    if(fetchedUser){
      
      const { wallet:address } = fetchedUser.user;
      setUser(fetchedUser.user);
      setState((prevState) => ({ ...prevState, address }));
      
    }
  }, [fetchedUser]);
  


  return (
    <APIContext.Provider value={{ 
      user,
      state,
      setState,
      setUser
    }}>
    
      {children}
   
    </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
