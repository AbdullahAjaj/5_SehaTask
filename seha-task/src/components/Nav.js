import React from "react";
import { useEffect } from "react";

const Nav = ({ changeList, listName }) => {
  function handleLiClick(e) {
    let myNav = [...document.getElementById("nav").children];
    myNav.forEach((item) => {
      item.classList.remove("styled");
    });
    e.target.classList.add("styled");
    changeList(e.target.innerHTML);
  }

  useEffect(()=>{
    // if (document.getElementById("nav") !== null) {
      let myNav = [...document.getElementById("nav").children];
      myNav.forEach((item) => {
        item.classList.remove("styled");
      });
      document.getElementById(listName).classList.add("styled");
    // }
  }, [listName])

  return (
    <nav id="nav">
      <li id="Cities" onClick={handleLiClick}>Cities</li>
      <li id="Users" onClick={handleLiClick}>Users</li>
      <li id="Reports" onClick={handleLiClick}>Reports</li>
    </nav>
  );
};

export default Nav;
