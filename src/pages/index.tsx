import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <nav className="flex flex-rows p-2 bg-red-500 text-white font-bold">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
