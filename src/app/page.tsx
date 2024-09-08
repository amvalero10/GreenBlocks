import Navbar from "../components/navbar";
import WalletConnectButton from "@/components/connectWalletButton";
import Market from "../components/Market";
import Footer from "../components/footer";

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

      <div>
      <br></br>
      <br></br>

      <Footer />
      </div>

    </div>
  );
}
