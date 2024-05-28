import React from "react";
import Breadcrumb from "./Breadcrumb";

function Header() {
  return (
    <header className="w-full h-16 flex text-white bg-lime-500 mb-8">
      <Breadcrumb />
    </header>
  );
}

export default Header;
