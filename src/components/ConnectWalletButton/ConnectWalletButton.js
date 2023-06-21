import React, { useEffect, useState } from "react";
import styles from "./ConnectWalletButton.module.css";
import { useAccount, useConnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import SigninModal from "../Modals/SigninModal/SigninModal";
import { useAPI } from '@/contexts/ApiProvider';


const ConnectWalletButton = () => {
 
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();

  const { state, setState, user, setUser } = useAPI(); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleClick = (event) => {
     event.preventDefault();
     if (!state.address) {
         setIsModalVisible(true);
     }
 }
 
 const closeModal = () => {
     setIsModalVisible(false);
 }
 
 
  



  // const connectAction = () => {
  //   open()
  // };

  return (
    <>
    {isModalVisible && <SigninModal onshow = {closeModal}  />}
      <button className="sc-button style style-2" onClick={handleClick}>
        <img
          src="/assets/images/icon/connect-wallet.svg"
          alt="icon"
          className={styles.walletIcon}
        />
        <span className={styles.walletText}> Connect Wallet</span>
      </button>

      
    </>
  );
};

export default ConnectWalletButton;

// Click to sign in and accept the EsthesticOptics Terms of Service (https://esthesticOptics.com/tos) and Privacy Policy (https://esthesticOptics.com/privacy).
