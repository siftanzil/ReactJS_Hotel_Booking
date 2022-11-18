import React, { useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { UserAuth } from "../contexts/AuthContext";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const handleToggle = () => {
      setIsOpen(!isOpen);
   };
   const { user, logout } = UserAuth();
   const navigate = useNavigate();
   const handleSignout = async () => {
      try {
         await logout();
         navigate("/signin");
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <Link to="/">
                  <img src={logo} alt="Beach Resort" />
               </Link>
               <button type="button" className="nav-btn" onClick={handleToggle}>
                  <FaAlignRight className="nav-icon" />
               </button>
            </div>
            <div>
               <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/rooms">Rooms</Link>
                  </li>
                  <li>
                     <button onClick={handleSignout}>
                        {user && user.email}
                        {!user && (
                           <Link
                              style={{ padding: 0, margin: 0 }}
                              to="/signin"
                              className="underline">
                              Sign in
                           </Link>
                        )}
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
