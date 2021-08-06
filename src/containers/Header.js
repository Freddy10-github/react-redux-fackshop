import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" fixed border-b-2 w-full text-center bg-gray-50 top-0 py-2">
      <Link to={`/`}>
        <h2 className="text-4xl">Fakeshop</h2>      
      </Link>      
    </div>
  );
};

export default Header;
