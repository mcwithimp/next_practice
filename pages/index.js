import Link from "next/link";
import Header from "../components/Header";

const Index = () => (
  <div>
    <Header />
    <h1>Hi, Next.js</h1>
    <h2>
      <Link href="/about">
        <div style={{ background: "black", color: "white" }}>About</div>
      </Link>
    </h2>
  </div>
);

export default Index;
