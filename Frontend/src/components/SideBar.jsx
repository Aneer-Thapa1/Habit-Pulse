import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col w-60 p-4 justify-center h-screen items-center bg-blue-950  text-white font-bold rounded-r-2xl ">
      <img src="" alt="" />
      <div>
        <ul className=" list-none flex flex-col gap-10 ">
          <li>Home</li>
          <li>Blogs</li>
          <li>Habits</li>
          <li>Tasks</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
