import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  const [greeting, setGreeting] = useState("");
  return (
    <div className="flex gap-10 w-screen bg-zinc-400">
      <SideBar />
      <div className="flex flex-col grow mt-5 ">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
