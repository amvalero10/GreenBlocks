import Navbar from "../components/navbar";
import WalletConnectButton from "@/components/connectWalletButton";
import Market from "../components/Market";

export default function Home() {
  return (
    <div>
      <div className="z-10 fixed top-4 right-4">
        <WalletConnectButton />
      </div>
      
      <div className="z-10">
        <Navbar />
      </div>

      <div>
        <Market />
      </div>

      <h1>GreenBlocks</h1>
      <p>
        GreenBlocks is a project that aims to help people to reduce their carbon
        footprint by providing them with a platform to buy and sell used items.
      </p>
    </div>
  );
}
