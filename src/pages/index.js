import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSection from '../components/HeroSection';
import LiveAuctions from '../components/LiveAuctions/LiveAuctions';
import TrendyCollection from '../components/TrendyCollection/TrendyCollection';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import HotCollection from '../components/HotCollection/HotCollection';
import TopSeller from '../components/TopSeller/TopSeller';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveAuctions/>
      <TopSeller/>
      <HotCollection/>
      <TrendyCollection/>
      <PopularCategories/>
    </>
  )
}
