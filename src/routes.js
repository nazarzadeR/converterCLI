import Routes, { Route } from "./util/route.js";

import word from "./controller/word.js";

const routes = new Routes();

routes.add(new Route("word", word));

export default routes;
