import React from 'react';
import { GitHub, Linkedin, Mail, Send } from 'react-feather';
import About from './About';
import './Main.css';
import Project from './Project/Project';
import Work from './Work';


const Main: React.FC = () => {

    return (
        <div id="main">
            <About id="about" />
            <Work id="work" />

            <article id="articles">
                <h2 className="major">articles</h2>
                <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
            </article>

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