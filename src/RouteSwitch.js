import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Play from "./Play";

const RouteSwitch = () => {
    useEffect(() => {
        document.body.classList.add(...["container", "m-auto"]);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="play/:id" element={<Play />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
