import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useAccount } from 'wagmi'
import { PrismaClient } from '@prisma/client'


const APIContext = createContext();

export const ApiProvider = ({ children }) => {
  return (
    <APIContext.Provider value={{ /* your own API logic */ }}>
    
      {children}
   
  </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
