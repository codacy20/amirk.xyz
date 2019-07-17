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
                    <li><a href="#intro">about</a></li>
                    <li><a href="#work">work</a></li>
                    <li><a href="#about">articles</a></li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                    {/* <li><a href="#elements">Elements</a></li> */}
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
                    <li><a href="#intro">contact</a></li>
                    <li><a href="#work">projects</a></li>
                    <li><a href="#about">blog</a></li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                    {/* <li><a href="#elements">Elements</a></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
