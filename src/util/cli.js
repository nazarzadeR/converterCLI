import meow from "meow";
import meowHelper from "cli-meow-help";

const flags = {
    help: {
        alias: "h",
        type: "boolean",
        desc: "Show help description",
    },
    clear: {
        alias: "c",
        default: false,
        type: "boolean",
        desc: "Clear screen before start",
    },
    input: {
        alias: "i",
        type: "string",
        desc: "Input file goes here",
    },
    extension: {
        alias: "e",
        type: "string",
        desc: "Convert format goes here exc pdf,excel, ... ",
    },
};

const commands = {
    word: { desc: "convert word file to selected type" },
};

const helpText = meowHelper({
    name: "converter",
    flags,
    commands,
    examples: [
        {
            command: `word somePath/filename.docx(doc)`,
        },
        {
            command: `word somePath/filename.docx(doc)`,
            flags: ["extension pdf"],
        },
        {
            command: `word`,
            flags: ["input somePath/filename.docx(doc)", "extension pdf"],
        },
    ],
});

export default meow(helpText, { flags, importMeta: import.meta });
