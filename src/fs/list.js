import { readdir } from 'fs/promises';
import { checkPath, getPath } from '../utils/index.js';

const FILE_PATH = './files';

const list = async () => {
    try {
        const isFolderExists = await checkPath(import.meta.url, FILE_PATH);
        if (!isFolderExists) {
            throw new Error('FS operation failed');
        }

        const path = getPath(import.meta.url, FILE_PATH);
        const fileList = await readdir(path);
        fileList.forEach((fileName) => console.log(fileName))
    } catch (error) {
        console.log(error.message);
    }
};

await list();