import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageTitle from "../components/PageTitle/PageTitle";
import OurLatestCollections from "../components/OurLatestCollections/OurLatestCollections";
import SearchAndFilter from "../components/SearchAndFilter/SearchAndFilter";
import NFTCardTwo from "../components/NFTCardTwo/NFTCardTwo";
import Loader from "../components/Loader/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Explore () {
    const [nfts, setNfts] = useState([]);

    const filterNfts = (searchTerm, category, status, collection, floorPrice) => {
        const filtered = nftsDetails.filter(nft => 
          nft.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (category === "All Categories" || nft.catergory === category) &&
          (status === "Status" || nft.status === status) &&
          (collection === "Collection" || nft.collection === collection) &&
          (floorPrice === "Floor Price" || parseFloat(nft.bid) >= parseFloat(floorPrice))
        );
        setNfts(filtered);
      };

  useEffect(() => {
    setNfts(nftsDetails);
  }, []);

    const [nftsCopy, setNftsCopy] = useState([]);
    let nftsDetails = [
        {
          imgSrc: "assets/images/product-item/item-13.jpg",
          collection: "Image",
          catergory: "Art",
          title: "‘’3D Space Rocket With Smoke’’",
          avatarSrc: "assets/images/avatar/avt-7.jpg",
          avatarAlt: "Image",
          authorName: "Daniel M. Bivens",
          bid: "5.23",
          status: 'Listed'
        },
        {
            imgSrc: "assets/images/product-item/item-13.jpg",
            collection: "Image",
            catergory: "PANDA",
            title: "‘’3D Space Rocket With Smoke’’",
            avatarSrc: "assets/images/avatar/avt-7.jpg",
            avatarAlt: "Image",
            authorName: "Daniel M. Bivens",
            bid: "5.23",
            status: 'Listed'
          },
        {
          imgSrc: "assets/images/product-item/item-13.jpg",
          collection: "Image",
          catergory: "PANDA",
          title: "‘’3D Space Rocket With Smoke’’",
          avatarSrc: "assets/images/avatar/avt-7.jpg",
          avatarAlt: "Image",
          authorName: "Daniel M. Bivens",
          bid: "5.23",
          status: 'Listed'
        },
        {
            imgSrc: "assets/images/product-item/item-13.jpg",
            collection: "Image",
            catergory: "PANDA",
            title: "‘’3D Space Rocket With Smoke’’",
            avatarSrc: "assets/images/avatar/avt-7.jpg",
            avatarAlt: "Image",
            authorName: "Daniel M. Bivens",
            bid: "5.23",
            status: 'Listed'
          },
        {
          imgSrc: "assets/images/product-item/item-13.jpg",
          collection: "Image",
          catergory: "PANDA",
          title: "‘’3D Space Rocket With Smoke’’",
          avatarSrc: "assets/images/avatar/avt-7.jpg",
          avatarAlt: "Image",
          authorName: "Daniel M. Bivens",
          bid: "5.23",
          status: 'Listed'
        },
        {
            imgSrc: "assets/images/product-item/item-13.jpg",
            collection: "Image",
            catergory: "PANDA",
            title: "‘’3D Space Rocket With Smoke’’",
            avatarSrc: "assets/images/avatar/avt-7.jpg",
            avatarAlt: "Image",
            authorName: "Daniel M. Bivens",
            bid: "5.23",
            status: 'Listed'
          },
        {
          imgSrc: "assets/images/product-item/item-13.jpg",
          collection: "Image",
          catergory: "PANDA",
          title: "‘’3D Space Rocket With Smoke’’",
          avatarSrc: "assets/images/avatar/avt-7.jpg",
          avatarAlt: "Image",
          authorName: "Daniel M. Bivens",
          bid: "5.23",
          status: 'Listed'
        },
        // Add more items as needed
        
      ];
      let nftsDetail = []
  return (
    <>
      <PageTitle
        title="Explore"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Explore" }]}
      />
      <OurLatestCollections />
      <SearchAndFilter onFilter={filterNfts} />
      {nftsDetails.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}

    </>
  );
}


// let nftsDetails = [
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     {
//       imgSrc: "assets/images/product-item/item-13.jpg",
//       collection: "Image",
//       catergory: "PANDA",
//       title: "‘’3D Space Rocket With Smoke’’",
//       avatarSrc: "assets/images/avatar/avt-7.jpg",
//       avatarAlt: "Image",
//       authorName: "Daniel M. Bivens",
//       bid: "5.23",
//       status: 'Listed'
//     },
//     {
//         imgSrc: "assets/images/product-item/item-13.jpg",
//         collection: "Image",
//         catergory: "PANDA",
//         title: "‘’3D Space Rocket With Smoke’’",
//         avatarSrc: "assets/images/avatar/avt-7.jpg",
//         avatarAlt: "Image",
//         authorName: "Daniel M. Bivens",
//         bid: "5.23",
//         status: 'Listed'
//       },
//     // Add more items as needed
    
//   ];