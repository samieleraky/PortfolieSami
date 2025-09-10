import React from "react";
import kanban from "../assets/kanban.png";

export const Process = () => {
    return (
        <div>
            {/* Process section */}
            <section className="p-6">
                <h2 className="text-2xl font-bold mb-4">The process</h2>

                {/* Box with text + photo */}
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-lg bg-white">
                    {/* Text */}
                    <div className="flex-1 space-y-4">
                        <p>
                            Our product group consists of five students, including myself. We
                            are a new group, and many of us do not know each other very well.
                            We are working together on a project to develop a job application
                            portal for a company that selects candidates using AI. The project
                            is part of our studies and will continue throughout the semester.
                            We have agreed in the group to use a Kanban board as a project
                            management tool, as it gives us a good overview of the tasks and
                            their status. In addition, the Kanban board also helps to delegate
                            tasks to the different group members.
                        </p>

                        <p>
                            At present, we have agreed to meet once a week to hold status
                            meetings and plan upcoming tasks. However, this will most likely
                            change as we progress further into the project. We also keep in
                            touch on an ongoing basis via a group chat on Teams, where we can
                            ask questions and help each other.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={kanban}
                            alt="Kanban board"
                            className="w-40 h-28 object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Individual process */}
            <section className="p-6 mt-12">
                <h2 className="text-3xl font-extrabold mb-6 text-center md:text-left">
                    Individuel proces
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-8 p-6 rounded-2xl shadow-lg bg-slate-100">
                    {/* Text */}
                    <div className="flex-1 space-y-4 text-gray-800 leading-relaxed">
                        <p>
                            In addition to the group's work, I have also focused on developing my
                            own skills during this project. I have enrolled in
                            Codeacademy where I am taking a course on React and
                            React Native. Both are important technologies for our front-end
                            development and app development. In addition, I will also spend time
                            completing educational videos about Tailwind and tutorials that
                            demonstrate the implementation of different techonologies.
                        </p>
                    </div>

                    {/* Optional image */}
                    <div className="flex-shrink-0 text-center">
                        <img
                            src="/images/individual.png"
                            alt="Individuel proces"
                            className="w-40 h-28 object-cover rounded-xl shadow-md mx-auto"
                        />                        
                    </div>
                </div>
            </section>
        </div>
    );
};
