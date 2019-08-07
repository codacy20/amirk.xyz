import React from 'react';
import { GitHub, Linkedin, Mail, Send } from 'react-feather';
import About from '../About/About';
import Project from '../Project/Project';
import Shelf from '../Shelf/Shelf';
import Work from '../Work/Work';


const Main: React.FC = () => {

    return (
        <div id="main">
            <About id="about" />
            <Work id="work" />
            <Shelf id="shelf" />

            <article id="contact">
                <h2 className="major">contact</h2>
                <ul className="icons">
                    <li>
                        <a href="https://github.com/codacy20" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/amirkiumarsi/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/rt_amir" target="_blank" rel="noopener noreferrer">
                            <Send />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:amir-rt@live.com">
                            <Mail />
                        </a>
                    </li>
                </ul>
                <p>Additionally, my PGP key can be found here. Hashes of my public key have been also uploaded to pastebin, here.</p>
            </article>

            <Project id="projects" />
        </div>
    )
}

export default Main;