import { promisify } from "util";
import DocxToPDf from "docx-pdf";
import { createSpinner } from "nanospinner";

import PreparedToConvert from "../helpers/file.js";
import { showErr, showSuc, finalMessage } from "../util/handlers.js";

const convert = promisify(DocxToPDf);

export default async function (path, extension = ".pdf") {
    const mainFileMeta = new PreparedToConvert(path);

    if (!mainFileMeta.isFileExist)
        return showErr(`File not found at ${mainFileMeta.getABSPathOdfFile}`);

    if (!mainFileMeta.isFormat([".docx", ".doc"]))
        return showErr("File extension not match of docx, doc");

    const spinner = createSpinner("Converting").start();

    const { filename } = await convert(
        mainFileMeta.getABSPathOdfFile,
        mainFileMeta.getConvertedFilePath(extension)
    );

    spinner.success({
        text: "Converted",
    });

    showSuc("File converted path is " + filename);

    finalMessage();
}
