import * as path from 'path';
import { stat } from 'fs/promises';
import { fileURLToPath } from 'url';

export const getPath = (moduleUrl, fileName) => {
    const __filename = fileURLToPath(moduleUrl);
    const dirName = path.dirname(__filename);

    return path.resolve(dirName, fileName);
};

export const checkPath = async (moduleUrl, fileName) => {
    try {
        await stat(getPath(moduleUrl, fileName));

        return true;
    } catch(error) {
        return false;
    }

};