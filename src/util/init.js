import welcome from "cli-welcome";
import { createRequire } from "module";
import unhandledError from "cli-handle-unhandled";

const pkg = createRequire(import.meta.url)("../../package.json");

export default function (clear) {
    unhandledError();
    welcome({
        clear,
        bold: true,
        color: `white`,
        bgColor: `#2db83d`,
        title: "Converter",
        version: pkg.version,
        tagLine: `by nazarzadeR`,
        description: pkg.description,
    });
}
