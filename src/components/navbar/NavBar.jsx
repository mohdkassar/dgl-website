import React from "react";
import "./navbar.css";
import logo from "../../assets/digilance-logo.png";
import { useState, useEffect } from "react";

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

const NavBar = ({ navHeader }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dgl__navbar">
      <div className="dgl__navbar-links">
        <div className="dgl__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dgl__navbar-links_container">
          {navHeader.map((header, index) => (
            <a
              className={
                activeIndex === index
                  ? "dgl__navbar-links_container_a_active"
                  : "dgl__navbar-links_container_a_not_active"
              }
              style={{
                background:
                  activeIndex === index
                    ? " linear-gradient(to top,#0b122f 0%,#1f497b 70%,#1f497b 100%)"
                    : "#0b122f",
              }}
              href={`#${header.headerID}`}
            >
              {header.headerTitle}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
