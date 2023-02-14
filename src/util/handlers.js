import figlet from "figlet";
import cliColor from "cli-color";

const { log } = console;
const Error = cliColor.red.underline.bold;
const Warn = cliColor.yellow.underline.bold;
const Success = cliColor.green.underline.bold;

export const showErr = (txt) => log(Error(txt));
export const showWarn = (txt) => log(Warn(txt));
export const showSuc = (txt) => log(Success(txt));
export const finalMessage = (txt = "BYE") =>
    log(
        figlet.textSync(txt, {
            width: 180,
            font: "Ghost",
            whitespaceBreak: true,
            verticalLayout: "default",
            horizontalLayout: "default",
        })
    );
