import { useState } from "react"; 

const weeks = [
    {
        title: "Week 33",
        goals: "To get an overview of the semester, our project, and my selective courses ",
        reflection:
            "The first week was mostly spent on practical information. We are a completely new group so we have to learn each other better and our ways of working. Luckily we were quick at choosing our project for the semester .",
        resources: ""
    },
    {
        title: "Week 34",
        goals: "Familiarize myself with the project and begin React",
        reflection:
            "We met in the product and guild groups, which provided valuable feedback. The majority of the time has been spent on starting the portfolio and diving into our project description. I have chosen to start a React course while continuously developing my portfolio in React.",
        resources:
            "React – YouTube on React and how to implement pages and routing"
    },
    {
        title: "week 35",
        goals: "Setting up a plan for our project, focusing on routing between pages in React, and continuing work on the portfolio.",
        reflection:
            "I managed to set up routing between my different pages in React. Our process guide provided valuable feedback as we gained insight into each other's portfolios and received feedback from teachers and fellow students. An important point was to get off to a good start with your blog/reflections.",
        resources: "React – focus on routing and describing our reflections on our blog "
    }
];

export const Reflections = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleWeek = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Refleksioner for semestret</h2>

            <div className="space-y-4">
                {weeks.map((week, index) => (
                    <div
                        key={index}
                        className="border rounded-xl bg-white shadow-md"
                    >
                        <button
                            onClick={() => toggleWeek(index)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold"
                        >
                            <span>{week.title}</span>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>

                        {openIndex === index && (
                            <div className="p-4 border-t space-y-3 text-gray-700">
                                <p className="font-bold">Mål</p>
                                <p>{week.goals}</p>

                                <p className="font-semibold">Ugen der gik</p>
                                <p>{week.reflection}</p>

                                <p className="font-semibold">Ressourcer</p>
                                <p>{week.resources}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};