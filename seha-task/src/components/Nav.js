import React from "react";

const Nav = ({ changeList }) => {
  function handleLiClick(e) {
    let myNav = [...document.getElementById("nav").children];
    myNav.forEach((item) => {
      item.classList.remove("styled");
    });
    e.target.classList.add("styled");
    changeList(e.target.innerHTML);
  }

  return (
    <nav id="nav">
      <li className="styled" onClick={handleLiClick}>
        Cities
      </li>
      <li onClick={handleLiClick}>Users</li>
    </nav>
  );
};

export default Nav;
