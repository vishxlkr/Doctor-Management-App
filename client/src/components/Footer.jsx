import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
   return (
      <div>
         <div>
            {/* ---------left section------- */}
            <div>
               <img src={assets.logo} alt="" />
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit est temporibus et dolore praesentium odit magni deleniti
                  consequuntur sed inventore.
               </p>
            </div>
            {/* --------center section---------- */}
            <div>
               <p>Company</p>
               <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Policy</li>
               </ul>
            </div>
            {/* --------right section---------- */}
            <div>
               <p>GET IN TOUCH</p>
               <ul>
                  <li>+91 6204820578</li>
                  <li>vishxlkr@gmail.com</li>
               </ul>
            </div>
         </div>
         <div>
            {/* ---------copyright text------ */}
            <div>
               <hr />
               <p>Copyright © 2025 Prescripto — All rights reserved.</p>>
            </div>
         </div>
      </div>
   );
};

export default Footer;
