// import { NFT as NFTType } from "@thirdweb-dev/sdk";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// import styles from "../styles/Sale.module.css";
// import profileStyles from "../styles/Profile.module.css";
// import {
//   useContract,
//   useCreateDirectListing,
//   Web3Button,
// } from "@thirdweb-dev/react";
// import {
//   MARKETPLACE_ADDRESS,
//   NFT_COLLECTION_ADDRESS,
// } from "../const/contractAddresses";
// import { useRouter } from "next/router";
// import toast, { Toaster } from "react-hot-toast";
// import toastStyle from "../util/toastConfig";

// type Props = {
//   nft: NFTType;
// };

// type DirectFormData = {
//   nftContractAddress: string;
//   tokenId: string;
//   price: string;
//   // startDate: Date;
//   // endDate: Date;
// };

// export default function SaleInfo({ nft }: Props) {
//   const router = useRouter();
//   // Connect to marketplace contract
//   const { contract: marketplace } = useContract(
//     MARKETPLACE_ADDRESS,
//     "marketplace-v3"
//   );


//   const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);



//   const { mutateAsync: createDirectListing } =
//     useCreateDirectListing(marketplace);

//   const [tab, setTab] = useState<"direct" | "auction">("direct");


//   async function checkAndProvideApproval() {
//     const hasApproval = await nftCollection?.call("isApprovedForAll", [
//       nft.owner,
//       MARKETPLACE_ADDRESS,
//     ]);

//     if (!hasApproval) {
//       const txResult = await nftCollection?.call("setApprovalForAll", [
//         MARKETPLACE_ADDRESS,
//         true,
//       ]);

//       if (txResult) {
//         toast.success("Marketplace approval granted", {
//           icon: "👍",
//           style: toastStyle,
//           position: "bottom-center",
//         });
//       }
//     }

//     return true;
//   }

//   const { register: registerDirect, handleSubmit: handleSubmitDirect } =
//     useForm<DirectFormData>({
//       defaultValues: {
//         nftContractAddress: NFT_COLLECTION_ADDRESS,
//         tokenId: nft.metadata.id,
//         price: "0",
//       },
//     });

//   async function handleSubmissionDirect(data: DirectFormData) {
//     await checkAndProvideApproval();
//     const txResult = await createDirectListing({
//       assetContractAddress: data.nftContractAddress,
//       tokenId: data.tokenId,
//       pricePerToken: data.price,
//     });

//     return txResult;
//   }

//   return (
//     <>
//       <Toaster position="bottom-center" reverseOrder={false} />
//       <div className={styles.saleInfoContainer} style={{ marginTop: -42 }}>
//         <div className={profileStyles.tabs}>
//           <h3
//             className={`${profileStyles.tab} 
//         ${tab === "direct" ? profileStyles.activeTab : ""}`}
//             onClick={() => setTab("direct")}
//           >
//             Direct
//           </h3>
//           <h3
//             className={`${profileStyles.tab} 
//         ${tab === "auction" ? profileStyles.activeTab : ""}`}
//             onClick={() => setTab("auction")}
//           >
//             Auction
//           </h3>
//         </div>

//         {/* Direct listing fields */}
//         <div
//           className={`${
//             tab === "direct"
//               ? styles.activeTabContent
//               : profileStyles.tabContent
//           }`}
//           style={{ flexDirection: "column" }}
//         >
          
//           <h4 className={styles.formSectionTitle}>Price </h4>

//           {/* Input field for buyout price */}
//           <legend className={styles.legend}> Price per token</legend>
//           <input
//             className={styles.input}
//             type="number"
//             step={0.000001}
//             {...registerDirect("price")}
//           />

//           <Web3Button
//             contractAddress={MARKETPLACE_ADDRESS}
//             action={async () => {
//               await handleSubmitDirect(handleSubmissionDirect)();
//             }}
//             onError={(error) => {
//               toast(`Listed Failed! Reason: ${error.cause}`, {
//                 icon: "❌",
//                 style: toastStyle,
//                 position: "bottom-center",
//               });
//             }}
//             onSuccess={(txResult) => {
//               toast("Listed Successfully!", {
//                 icon: "🥳",
//                 style: toastStyle,
//                 position: "bottom-center",
//               });
//               router.push(
//                 `/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`
//               );
//             }}
//           >
//             Start Minting
//           </Web3Button>
//         </div>

//       </div>
//     </>
//   );
// }



import React, { useRef, useState } from 'react';
import { MediaRenderer, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home1.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [nftName, setNftName] = useState<string>("");
  const [nftDescription, setNftDescription] = useState<string>("");
  const [mintingNFT, setMintingNFT] = useState<boolean>(false);
  const [location, setLocation] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [furnishedStatus, setFurnishedStatus] = useState('');
  const [others, setOthers] = useState('');

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const reset = () => {
    setImageUrl(null);
  };

  const handleMint = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files || fileInputRef.current.files.length === 0) {
      console.error("No file selected");
      return;
    }
  
    setMintingNFT(true);
    try {
      const formData = new FormData();
      const formData1 = new FormData();
      const formData2 = new FormData();
      const formData3 = new FormData();
      const formData4 = new FormData();
      const formData5 = new FormData();
      const formData6 = new FormData();
      const formData7 = new FormData();
      formData.append('name', nftName);
      formData1.append('description', nftDescription);
      formData2.append('image', fileInputRef.current.files[0]);
      formData3.append('address', address || '');
      formData4.append('location', location || '');
      formData5.append('carpetArea', carpetArea || '');
      formData6.append('furnishedStatus', furnishedStatus || '');
      formData7.append('others', others || '');
  
      const response = await fetch("/api/mintNFT", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      // Handle successful response
      console.log("NFT minted:", data);
    } catch (error) {
      console.error("Minting error:", error);
    } finally {
      alert("NFT minted!");
      setMintingNFT(false);
      setImageUrl(null);
      setNftName("");
      setNftDescription("");
    }
  };
  

  return (
    <div className={styles.container}>
      {address ? (
        <div className={styles.minterContainer}>
          <div className={styles.mintContainerSection}>
            <h1>NFT Media</h1>
            <div 
              className={styles.fileContainer} 
              onClick={handleFileSelect}
            >
              <input
                type="file"
                accept='image/*'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleChange}
              />
              {!imageUrl ? (
                <div
                  style={{ 
                    border: '2px dashed grey', 
                    padding: '20px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',    
                  }}
                >
                  <p>Click to add file</p>
                </div>
              ) : (
                <div style={{ height: "100%" }}>
                  <MediaRenderer
                    src={imageUrl}
                    height='100%'
                    width='100%'
                  />
                  <button 
                    onClick={reset}
                    className={styles.resetButton}
                  >Reset</button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.mintContainerSection}>
            <h1>NFT Metadata</h1>
            <p>NFT Name:</p>
            <input 
              type="text"
              placeholder="My NFT Name"
              onChange={(e) => setNftName(e.target.value)}
              value={nftName}
              className={styles.metadataInput}
            />
            <p>NFT Description:</p>
            <input 
              type="text"
              placeholder="Describe your property in a coherent manner...."
              onChange={(e) => setNftDescription(e.target.value)}
              value={nftDescription}
              className={styles.metadataInput}
            />
            <p>Location:</p>
            <input 
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className={styles.metadataInput}
            />
            <p>Carpet Area:</p>
            <input 
              type="text"
              placeholder="Carpet area in sq mtrs"
              onChange={(e) => setCarpetArea(e.target.value)}
              value={carpetArea}
              className={styles.metadataInput}
            />
            <p>Furshining Status:</p>
            <input 
              type="text"
              placeholder="Furnished/Unfurnished"
              onChange={(e) => setFurnishedStatus(e.target.value)}
              value={furnishedStatus}
              className={styles.metadataInput}
            />
            <p>Other Details:</p>
            <input 
              type="text"
              placeholder="Other Ammenities"
              onChange={(e) => setOthers(e.target.value)}
              value={others}
              className={styles.metadataInput}
            />
            <button
              className={styles.mintButton}
              onClick={handleMint}
              disabled={mintingNFT}
            >{mintingNFT ? "Minting NFT..." : "Mint NFT"}</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Sign in to mint an NFT</h1>
        </div>
      )}
    </div>
  );
};

export default Home;