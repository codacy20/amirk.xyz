import * as React from 'react';
import './Header.css';

// export interface Props{

//     name: string;
// }

function Header() {

    return (
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
    );
}

export default Header;
