import React from "react";
import './Nav.scss'
import {  NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            // exact={true} if /
            <div className="topnav">
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to="/home">Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to="/todo">Todo</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to="/about">About</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to="/user">User</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to="/redux">Redux</NavLink>
            </div>
        )
    }
}

export default Nav