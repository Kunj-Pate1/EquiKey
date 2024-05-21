import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
      <h1>Buy Real Estate</h1>
      <p>Browse which assests are available on the marketplace.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no Assests in this collection."
        }
      />
    </Container>
  );
}
