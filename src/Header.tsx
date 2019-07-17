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
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <li><a href="#elements">Elements</a></li> */}
                </ul>
            </nav>
            <div className="content">
                <div className="inner">
                    <h1>AmirK</h1>
                    <p>this is just some text <a href="https://html5up.net/license">Creative Commons</a> license.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <li><a href="#elements">Elements</a></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
