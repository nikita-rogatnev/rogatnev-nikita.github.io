// Production entry. The page markup is prerendered into index.html at build
// time (see webpack.config.js), so the browser only needs the styles and the
// scroll-reveal enhancement.
import "./fonts.css";
import "./main.scss";

import initReveal, {updateYear} from "./reveal";

updateYear();
initReveal();
