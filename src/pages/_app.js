import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import "../styles/swiper-bundle.min.css";
import { ToastContainer } from 'react-toastify';
import {ApiProvider} from "@/contexts/ApiProvider";
import { goerli, mainnet } from 'wagmi/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import $ from 'jquery';
import 'react-toastify/dist/ReactToastify.css';


const ourChains = [goerli, mainnet]
const projectId = '3458f0fae062a1fb5e3429a71a0153f3'

const { chains, publicClient  } = configureChains(ourChains, [w3mProvider({ projectId })])
const wagmiClient = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient 
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App({Component}) {
  return (
    <>
    <WagmiConfig config={wagmiClient}>
    < ApiProvider>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Bidzen | NFT Marketplace HTML Template</title>
        <meta name="author" content="themesflat.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/responsive.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css"
        />
        <link rel="shortcut icon" href="/assets/icon/Favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/assets/icon/Favicon.png"
        />
      </Head>
      <div className="App">
        <Header />
        <Component  />
        <Footer />
        <ToastContainer />
      </div>
      </ ApiProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
