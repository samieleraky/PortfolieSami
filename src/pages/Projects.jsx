export const Projects = () => {
    return (
        <section>
            

            <section className="projects-section">
                <ul className="projects-list">
                    <li className="project-item">
                        <h3>Gotorz - Travel Agency Website</h3>
                        <p>
                            A full-stack travel agency website built with Blazor that integrates with
                            various APIs to search for hotel and flight options. Features secure
                            Stripe payment integration for our users.
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
                                Live Demo
                            </a>
                        </div>
                    </li>

                    <li className="project-item">
                        <h3>Personal Portfolio</h3>
                        <p>A responsive portfolio website built with React and modern web technologies to showcase my skills and projects.</p>
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

            <section className="technologies-section">
                <h2>Technologies & Tools</h2>
                <div className="tech-stack">
                    <h3>Frontend:</h3>
                    <p>React, JavaScript, HTML, Blazor</p>

                    <h3>Backend:</h3>
                    <p> .NET, APIs Integration</p>

                    <h3>Tools & Deployment:</h3>
                    <p> GitHub, Azure, Stripe API</p>
                </div>
            </section>
        </section> // This closes the main section properly
    );
};