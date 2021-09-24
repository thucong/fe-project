import React, { useEffect, useState } from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
function Header(props) {
  const [header, setHeader] = useState(false);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 103) {
      return setHeader(false);
    } else if (window.scrollY > 100) {
      return setHeader(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div
      className={`${header === true ? "header sticky fixed" : "header sticky"}`}
    >
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}

export default Header;
