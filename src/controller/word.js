import inquirer from "inquirer";

import { showErr, showWarn } from "../util/handlers.js";
import wordToPdf from "../service/wordToPdf.js";

export default async function word(cli) {
    const { input, flags } = cli;
    let extension = { extension: flags.extension };
    const mainFilePath = input[1] || flags.input;

    if (!!!mainFilePath)
        return showErr("Enter word file to convert");

    if (!!!extension.extension) {
        extension = await inquirer.prompt({
            type: "list",
            default: "pdf",
            name: "extension",
            message: "Select file extension to convert",
            choices: ["pdf"],
        });
    }

    switch (extension.extension) {
        case "pdf":
            await wordToPdf(mainFilePath);
            break;
        default:
            showWarn("Extension not support");
    }
}
