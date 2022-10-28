import React from "react";

export default function Navbar() {
  return (
    <div className="header1">
      <div className="head1">
        <ul>
          <li className="appName">Textbox</li>
          <li>Home</li>
          <li>Menu</li>
        </ul>
      </div>
      <div className="head2">
        <ul>
          <li>
            <input type="text" placeholder="search" />
          </li>
          <li>
            <button>Search</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
