import { NFT as NFTType } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from 'react';
import { MediaRenderer, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home1.module.css";
import { NextPage } from "next";
import profileStyles from "../styles/Profile.module.css";

const mint: NextPage = () => {
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

  
}


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