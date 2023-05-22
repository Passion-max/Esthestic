import React, { useEffect, useState } from "react";
import styles from "./ConnectWalletButton.module.css";
import { useAccount, useConnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";


const ConnectWalletButton = () => {
 
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  



  const connectAction = () => {
    open()
  };

  return (
    <>
      <button className="sc-button style style-2" onClick={() => connectAction()}>
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
