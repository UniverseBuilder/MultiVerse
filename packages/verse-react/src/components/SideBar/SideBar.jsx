import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";

export const SideBar = ({ content }) => {
  return (
    <div className="side-bar-wrapper bg-light">
      <ul className="navbar-nav mr-auto mt-1 mt-lg-0">
        <For each="route" of={content} index="index">
          <li className="side-links side-hover" key={route.title}>
            <NavLink className="nav-link" to={route.path}>
              {route.title}
            </NavLink>
          </li>
        </For>
      </ul>
    </div>
  );
};
