import React from "react";
import './Nav.scss'
import { Link, NavLink } from "react-router-dom";

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
            </div>
        )
    }
}

export default Nav