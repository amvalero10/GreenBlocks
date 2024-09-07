import Image from "next/image";
import Market from "./page/Market";
import Nav from "./page/Nav";

export default function Home() {
  return (

    <div>
      <h1>GreenBlocks</h1>
      <p>GreenBlocks is a project that aims to help people to reduce their carbon footprint by providing them with a platform to buy and sell used items.</p>
      
      <Market />

      <Nav />



      {/* <Image
        src="/images/greenblocks.png"
        alt="GreenBlocks"
        width={200}
        height={200}
      /> */}

    </div>

  );
}
