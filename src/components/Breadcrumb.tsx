import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbContext } from "../context/BreadcrumbContext";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .replace("projekt/", "projekt")
    .split("/")
    .filter((path) => path !== "");
  const pathnamesForLink = location.pathname
    .split("/")
    .filter((path) => path !== "");
  const { breadcrumbname } = useContext(BreadcrumbContext);

  console.log(pathnames);
  console.log(location.pathname);

  return (
    <nav className="flex items-center ml-4">
      <ul className="flex list-reset gap-4">
        <li>
          <Link to="/">Projektübersicht (PPS)</Link>
        </li>
        {pathnames.map((value, index) => {
          let name = value;
          const to = `/${pathnamesForLink.slice(0, index + 2).join("/")}`;
          const isLast = index === pathnames.length - 1;

          if (value.includes("projekt")) {
            name = breadcrumbname;
          }

          name = name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <li>
              {isLast ? <span>{name}</span> : <Link to={to}>{name}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
