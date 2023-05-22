import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactUs from "../components/ContactUs/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Explore () {
    
  return (
    <>
      <PageTitle
        title="Contact Us"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact" }]}
      />
      <ContactInfo />
      <ContactUs />

    </>
  );
}
