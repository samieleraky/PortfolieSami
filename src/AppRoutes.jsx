import { Routes, Route, Link } from "react-router-dom";
import { Reflections } from "./pages/Reflections";
import { Process } from "./pages/Process";
import { LearningObjectives } from "./pages/LearningObjectives";
import { Resources } from "./pages/Resources";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
    return (
        <>
            <nav style={{ marginBottom: "1rem" }}>
                <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
                <Link to="/Reflections" style={{ marginRight: "1rem" }}>Reflections</Link>
                <Link to="/Process" style={{ marginRight: "1rem" }}>Process</Link>
                <Link to="/LearningObjectives" style={{ marginRight: "1rem" }}>Objectives</Link>
                <Link to="/Resources">Resources</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reflections" element={<Reflections />} />
                <Route path="/Process" element={<Process />} />
                <Route path="/LearningObjectives" element={<LearningObjectives />} />
                <Route path="/Resources" element={<Resources />} />
            </Routes>
        </>
    );
};