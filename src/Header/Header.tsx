import * as React from 'react';
import Footer from '../Footer/Footer';
import './Header.css';

export default function Header() {

    return (
        <React.Fragment>
            <header id="header">
                <nav>
                    <ul>
                        <li><a href="#about">about</a></li>
                        <li><a href="#work">work</a></li>
                        <li><a href="#articles">articles</a></li>
                    </ul>
                </nav>
                <div className="content">
                    <div className="inner">
                        <h1>Amir Kiumarsi</h1>
                        <p>web developer, cloud engineer</p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="#contact">contact</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="/AmirKiumarsiCV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                    </ul>
                </nav>
            </header>
            <Footer />
        </React.Fragment>
    );
}
