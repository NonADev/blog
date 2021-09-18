import { Component } from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage-capsule">
                <nav className="homepage-nav">
                    <a href="#1" className="homepage-logo-display">
                        <img src="favicon.ico" alt="icone" />
                        <h2>_nonadev</h2>
                    </a>
                    <div className="homepage-link-colection">
                        <a href="#2">About</a>
                        <a href="#3">Portifolio</a>
                        <a href="#4">Contact</a>
                    </div>
                </nav>
            </div>
        )
    }
}