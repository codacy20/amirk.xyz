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
                    <li><a href="#intro">ABOUT</a></li>
                    <li><a href="#work">WORK</a></li>
                    <li><a href="#about">ARTICLES</a></li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                    {/* <li><a href="#elements">Elements</a></li> */}
                </ul>
            </nav>
            <div className="content">
                <div className="inner">
                    <h1>Amir Kiumarsi</h1>
                    <p>DEVELOPER, FREELANCER and CLOUD ENGINEER</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#intro">CONTACT</a></li>
                    <li><a href="#work">PROJECT</a></li>
                    <li><a href="#about">BLOG</a></li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                    {/* <li><a href="#elements">Elements</a></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
