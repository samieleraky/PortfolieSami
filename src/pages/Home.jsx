import React from 'react';
import SamiPhoto from '../assets/Sami.jpg'; // Make sure to have the image in the specified path

export const Home = () => {
    return (
        <section>
            <section className="intro">
                <img src={SamiPhoto} alt="Sami" className="profile-photo" />
            </section>

            <section>
                <h2>Hi I'm Sami</h2>
                <p>
                    I am a computer-science student who is currently enrolled at the University
                    College Lillebaelt in Denmark. My main interests are web development,
                    frontend development and databases. I have a background in professional
                    basketball which has taught me the value of discipline, strategy and
                    teamwork; skills that I now try to apply to my studies. I enjoy
                    acquiring new knowledge and searching for new ways to implement digital
                    solutions to our day-to-day affairs. Just like in sports, I believe
                    that continuous progression is the key to both personal growth and
                    building successful, impactful software.
                </p>
            </section>


            <section>
                <h2>Contact</h2>
                <p>
                    Email:{" "}
                    <a href="mailto:samieleraky1@gmail.com">samieleraky1@gmail.com</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/samieleraky">samieleraky</a>
                </p>
            </section>
        </section>
    );
};
    