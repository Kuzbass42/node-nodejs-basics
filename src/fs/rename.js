import { rename as renameFile } from 'fs/promises'
import { checkPath, getPath } from '../utils/index.js';

const FILE_TO_RENAME = './files/wrongFilename.txt';
const FILE_TO_WRITE = './files/properFilename.md';

const rename = async () => {
    try {
        const isFileToRenameExists = await checkPath(import.meta.url, FILE_TO_RENAME);
        if (!isFileToRenameExists) {
            throw new Error('FS operation failed');
        }

        const isFileToWriteExists = await checkPath(import.meta.url, FILE_TO_WRITE);
        if (isFileToWriteExists) {
            throw new Error('FS operation failed');
        }

        await renameFile(getPath(import.meta.url, FILE_TO_RENAME), getPath(import.meta.url, FILE_TO_WRITE));
    } catch (error) {
        console.error(error.message);
    }
};

await rename();