import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
    useEffect(() => {
        document.body.classList.add(...["container", "m-auto"]);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
