import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbContext } from "../context/BreadcrumbContext";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.replace("projekt/", "projekt").split("/");
  const { breadcrumbname } = useContext(BreadcrumbContext);

  return (
    <nav className="flex items-center">
      <ul className="flex list-reset">
        <li>
          <Link to="/" className="mx-4">
            Projektübersicht (PPS)
          </Link>
        </li>
        {pathnames.map((value, index) => {
          let name = value;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          if (value.includes("projekt")) {
            name = breadcrumbname;
          }

          return (
            <li key={to}>
              {isLast ? <span>{name}</span> : <Link to={to}>{name}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
