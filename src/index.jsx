import React from "react";
import {createRoot} from "react-dom/client";

import "./main.scss";

import App from "./components/app/app";

const initApp = () => {
    const root = createRoot(document.getElementById(`root`));
    root.render(<App/>);
};

initApp();
