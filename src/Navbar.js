import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1 className="blogTitle">_nonadev Blog</h1>
                <div className="links">
                    <Link to="/" className="navbar-item-active">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>
            </nav>
        );
    }
}