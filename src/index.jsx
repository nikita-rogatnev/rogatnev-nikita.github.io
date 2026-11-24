// Development entry (npm start): renders the app in the browser with hot reload.
// The production build prerenders the same <App/> to static HTML instead.
import {createRoot} from "react-dom/client";

import "./fonts.css";
import "./main.scss";

import App from "./components/app/app";

const root = createRoot(document.getElementById(`root`));
root.render(<App/>);
