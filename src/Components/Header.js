import React from 'react';
import {NavLink } from 'react-router-dom'

function Header() {

  function setActive({isActive}) {
  return  isActive ? "text-yellow-300 " : '';
}
  return (
    <header>
      <nav  className="flex justify-between bg-cyan-700 p-5 items-center shadow-md text-white font-arial">
        <h3>Github Searcher Users</h3>
        <span className="p-2">
          <NavLink className={setActive} style={{marginRight:"20px"}} to="/" >Home</NavLink>
          <NavLink className={setActive} to="/favorites">Favorites </NavLink>
        </span>
      </nav>
    </header>
  );
}
export default Header;