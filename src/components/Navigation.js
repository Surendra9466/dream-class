import React from "react";
import "../css/navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <h1 id="title">DREAMCLASS</h1>
      <ul className="list-item">
        <a href="#course">COURSES</a>
        <a href="#LOGIN">LOGIN</a>
      </ul>
    </div>
  );
}

export default Navigation;
