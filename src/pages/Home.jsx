import React from 'react';
import SamiPhoto from '../assets/Sami.jpg'; // Make sure to have the image in the specified path
import './Home.css'; // Import the CSS file for styling

export const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="image-container">
                        <img
                            src={SamiPhoto}
                            alt="Sami"
                            className="profile-photo"
                        />
                    </div>
                    <div className="text-content">
                        <h2>Hi, I'm Sami</h2>
                        <p className="intro-text">
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
                    </div>
                </div>
            </section>

            <section className="skills-section">
                <h2>Skills & Toolstack</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <i className="fas fa-code"></i>
                        <h3>Languages</h3>
                        <p>C#, SQL, HTML, CSS</p>
                    </div>

                    <div className="skill-card">
                        <i className="fas fa-cubes"></i>
                        <h3>Frameworks</h3>
                        <p>Blazor, ASP.NET Core, Bootstrap, EF Core, SignalR</p>
                    </div>

                    <div className="skill-card">
                        <i className="fas fa-database"></i>
                        <h3>Databases</h3>
                        <p>SQL Server</p>
                    </div>

                    <div className="skill-card">
                        <i className="fas fa-tools"></i>
                        <h3>Tools</h3>
                        <p>Git, Visual Studio</p>
                    </div>
                </div>
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
        </div>
    );
};
    