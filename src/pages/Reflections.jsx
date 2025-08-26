import { useState } from "react"; 

const weeks = [
    {
        title: "Uge 33",
        goals: "At få et overblik over semestret, vores projekt og mine valgfag",
        reflection:
            "Første uge gik mest med praktisk information. Jeg troede at jeg ville fortsætte med at arbejde videre med samme gruppe som sidst, men desværre blev vi nødsaget til at splitte gruppen op. Vores undervisere var gode til at finde os en ny gruppe og heldigvis var vi hurtige til at få valgt et projekt",
        resources: ""
    },
    {
        title: "Uge 34",
        goals: "Sætte mig ind i projektet, og påbegynde React",
        reflection:
            "Vi mødtes i produkt- og guildgrupperne, hvilket har givet god sparring. Det meste af tiden er blevet brugt på at påbegynde porteføljen samt dykke ned i vores projektbeskrivelse. Jeg har valgt at påbegynde et React-kursus mens jeg løbende udvikler min portefølje i React",
        resources:
            "React – YouTube om React samt hvordan man opstiller routing og pages"
    },
    {
        title: "Uge 35",
        goals: "At opsætte en plan for vores projekt, fokus på routing mellem pages i React, samt arbejde videre portefølje",
        reflection:
            "Det lykkedes mig at opsætte routing imellem mine forskellige sider i React. Vores Procesvejledning har givet god sparring da vi fik indblik i hinandens porteføljer samt feedback fra undervisere og medstuderende. En vigtig pointe var at komme godt igang med ens blog/refleksioner",
        resources: "React – fokus på routing"
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