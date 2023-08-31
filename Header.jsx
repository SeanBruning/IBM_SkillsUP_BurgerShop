import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi"; // Keep FiLogIn
import { FaUser } from "react-icons/fa"; // Keep FaUser
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          Shopping Cart
          <FiShoppingCart />
        </Link>
        {/* Example usage of FiLogIn and FaUser */}
        {isAuthenticated ? (
          <>
            <FiLogIn /> {/* Use the FiLogIn icon */}
            <FaUser /> {/* Use the FaUser icon */}
          </>
        ) : (
          <DropdownMenu />
        )}
      </div>
    </nav>
  );
};

export default Header;
