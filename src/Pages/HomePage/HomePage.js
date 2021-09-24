import { Component } from "react";
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage-capsule">
                <nav className="homepage-nav">
                    <div className="homepage-logo-display">
                        <a href="#1">
                            <img src="favicon.ico" alt="icone" />
                        </a>
                    </div>
                    <div className="homepage-link-colection">
                        <a href="#2">ABOUT</a>
                        <a href="#3">PORTFOLIO</a>
                        <a href="#4">CONTACT</a>
                        <a href="#5" className="homepage-link-colection-button">RESUME</a>
                    </div>
                </nav>
                <div className="homepage-body">
                    <div className="homepage-presentation-display">
                        <h1>Hello, i'm <span className="homepage-emphasis">Wesley Lima</span>,</h1>
                        <h1>i'm a full-stack web developer.</h1>
                    </div>
                </div>
                <div style={{height: '100vh', backgroundColor: 'greenyellow'}}> </div>
            </div>
        )
    }
}