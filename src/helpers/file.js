import fs from "fs";
import path from "path";

export default class PreparedToConvert {
    constructor(filePath) {
        this.path = filePath;
        this.workingDir = process.cwd();
        this.pathMeta = path.parse(filePath);
    }

    get isFileExist() {
        const filePath = path.join(this.workingDir, this.path);
        return fs.existsSync(filePath);
    }

    get getABSPathOdfFile() {
        return path.join(this.workingDir, this.path);
    }
    get getFilePathTOWriteDir() {
        return path.join(path.dirname(this.getABSPathOdfFile), "convert");
    }

    isFormat(extension) {
        if (Array.isArray(extension))
            return extension.includes(this.pathMeta.ext);
        return this.pathMeta.ext === extension;
    }

    getConvertedFilePath(extension) {
        return path.join(
            this.getFilePathTOWriteDir,
            this.pathMeta.name + extension
        );
    }
}
