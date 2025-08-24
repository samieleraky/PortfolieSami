import "./App.css";
import React from "react";

export default function App() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
            <header>
                <h1>Portfolio</h1>
            </header>
            <section className="intro">
                <img
                    src="Sami.jpg"
                    
                    className="profile-photo"
                />
               </section>

            <section>
                <h2>Hi Im Sami</h2>
                <p>
                    I am computer-science student who is currently enrolled at University
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
                <h2>Projects</h2>
                <ul className="projects-list">
                    <li className="project-item">
                        <h3>Gotorz</h3>
                        <p>
                            A travel agency website made with Blazor which uses APIs to search
                            for hotel and flight options. Users are redirected to Stripe
                            payment using Stripe API.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/Team13-UCL/GoTorz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Source Code
                            </a>
                            <a
                                href="https://gotorzz-hhchfbhabzaae6dr.swedencentral-01.azurewebsites.net/Login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success"
                            >
                                Live Website
                            </a>
                        </div>
                    </li>

                    <li className="project-item">
                        <h3>Portfolio</h3>
                        <p>My personal portfolio made with React</p>
                        <div className="project-links">
                            <a
                                href="https://github.com/samieleraky/PortfolieSami"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Source Code
                            </a>
                            <a
                                href="https://samieleraky.github.io/PortfolieSami/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success"
                            >
                                Live Website
                            </a>
                        </div>
                    </li>
                </ul>
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
        </main>
    );
}
