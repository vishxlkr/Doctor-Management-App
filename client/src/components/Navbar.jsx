import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
   return (
      <div>
         <img src={assets.logo} alt="" />
         <ul>
            <NavLink>home</NavLink>
         </ul>
      </div>
   );
};

export default Navbar;
