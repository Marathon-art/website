import React, { useContext } from 'react';
import { Web3AuthContext } from '@/app/components/providers/Web3AuthProvider';


// Custom hook to use Web3Auth
export const useWeb3Auth = () => {
  const web3Auth = useContext(Web3AuthContext);
  
  if (!web3Auth) {
    throw new Error("useWeb3Auth must be used within a Web3AuthProvider");
  }

  return web3Auth;
};
