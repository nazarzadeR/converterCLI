import cli from "./util/cli.js";
import init from "./util/init.js";
import routes from "./routes.js";

const inputs = cli.input;
const flags = cli.flags;

export default async function () {
    init(flags.clear);

    await routes.check(inputs[0], cli);
}
