import './HomePage.scss';

export default function HomePage(props) {
    return (
        <div className="homepage-capsule">
            <nav className="homepage-nav">
                <div className="homepage-logo-display">
                    <a href="#1">
                        <img src="favicon.ico" alt="icone" />
                    </a>
                </div>
                <ul className="homepage-link-colection">
                    <li>
                        <a href="#2">ABOUT</a>
                    </li>
                    <li>
                        <a href="#3">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="#4">CONTACT</a>
                    </li>
                    <li>
                        <a href="#5" className="homepage-link-colection-button">RESUME</a>
                    </li>
                </ul>
            </nav>
            <section className="homepage-body pt-175" >
                <div className="homepage-presentation-display">
                    <h2 className="homepage-emphasis homepage-presentation-text">Hello, i am </h2>
                    <h1><span >Wesley Lima</span>.</h1>
                    <h3>full-stack web developer.</h3>
                    <p>
                        {/* TODO: ALTERAR O TEXTO DE PLACEHOLDER */}
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
                        Currently, I’m focused on building accessible, human-centered products at <a className="link-stilizer" href="#4">Upstatement</a>.
                    </p>
                </div>
            </section>
            <section className="homepage-body">
                <div className="homepage-projects-display">
                    <div className="homepage-presentation-text">
                        &lt;&lt;projeto 1&gt;&gt;
                    </div>
                    <div className="homepage-presentation-text">
                        &lt;&lt;projeto 2&gt;&gt;
                    </div>
                    <div className="homepage-presentation-text">
                        &lt;&lt;projeto 3&gt;&gt;
                    </div>
                </div>
            </section>
            <section style={{height: '100vh', backgroundColor: 'greenyellow', border: '1px solid red'}}></section>
        </div>
    );
}