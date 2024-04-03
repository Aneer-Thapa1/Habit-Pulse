import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-white font-black flex justify-between  h-12 w-11/12 gap-20 items-center rounded-s-sm mx-auto px-10 ">
      <h5>This is navbar</h5>
      <div className="flex justify-center items-center gap-3">
        <img
          class="w-9 h-9 rounded-full "
          src="https://avatars.githubusercontent.com/u/134839446?v=4"
          alt="profile picture"
        />
        <div className="flex flex-col items-start">
          <h4 className=" font-medium ">Anir Jung Thapa</h4>
          <p className=" font-light text-sm">anir234thapa@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
