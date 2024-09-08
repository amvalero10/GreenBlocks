import Nav from "../components/Nav";
import Navbar from "../components/navbar";
import Market from "../components/Market";

export default function Home() {
  return (
    <div>

      <div>
        <Navbar />
      </div>

      <div>
      <Market />
      </div>


      <Nav />
      <h1>GreenBlocks</h1>
      <p>
        GreenBlocks is a project that aims to help people to reduce their carbon
        footprint by providing them with a platform to buy and sell used items.
      </p>


    </div>
  );
}
