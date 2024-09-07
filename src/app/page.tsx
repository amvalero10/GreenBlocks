import Market from "./page/Market";
import Nav from "./page/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>GreenBlocks</h1>
      <p>
        GreenBlocks is a project that aims to help people to reduce their carbon
        footprint by providing them with a platform to buy and sell used items.
      </p>
      <Market />
    </div>
  );
}
