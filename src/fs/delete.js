import { rm } from 'fs/promises'
import { checkPath, getPath } from '../utils/index.js';

const FILE_TO_DELETE = './files/fileToRemove.txt';

const remove = async () => {
    try {
        const isFileExists = await checkPath(import.meta.url, FILE_TO_DELETE);
        if (!isFileExists) {
            throw new Error('FS operation failed');
        }

        await rm(getPath(import.meta.url, FILE_TO_DELETE));
    } catch (error) {
        console.error(error.message);
    }
};

await remove();