import { stat, writeFile } from 'fs/promises';
import { checkPath, getPath } from '../utils/index.js';

const FILE_TO_CREATE = './files/fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
    try {
        const isFileExists = await checkPath(import.meta.url, FILE_TO_CREATE);
        if (isFileExists) {
            throw new Error('FS operation failed');
        }

        await writeFile(getPath(import.meta.url, FILE_TO_CREATE), FILE_CONTENT);
    } catch (error) {
        console.error(error.message);
    }
};

await create();