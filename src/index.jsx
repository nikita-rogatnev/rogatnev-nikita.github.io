import React from "react";
import {render} from "react-dom";

import "./main.scss"

import App from "./components/app/app";

const initApp = () => {
    render((<App/>), document.getElementById(`root`));
};

initApp();
