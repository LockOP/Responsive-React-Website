import { Link, useMatch, useResolvedPath } from "react-router-dom";
import items from "./menuItems";
import { useState } from "react";

export default function Menu() {
  const [clickStatus,clicked] = useState(false)
  function handleClick(){
    clicked(!clickStatus)
  }
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-site-name">
        Nexgen Digimedia
      </Link>
      <div className="icon-container" onClick={handleClick}>
        <i
          className={
            clickStatus ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-xl"
          }
        ></i>
      </div>
      <ul className={clickStatus? "on" : "off"}>
        {items.map((item, index) => {
          return (
            <CustomMenu onClick={handleClick} to={item.url} className={item.cName}>
              {item.name}
            </CustomMenu>
          );
        })}
      </ul>
    </nav>
  );
}

function CustomMenu({ onClick, to, className, children }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li>
      <Link onClick={onClick} to={to} className={isActive? className+"-active": className}>
        {children}
      </Link>
    </li>
  );
}
