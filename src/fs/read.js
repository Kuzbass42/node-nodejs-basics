import { readFile } from 'fs/promises'
import { checkPath, getPath } from '../utils/index.js';

const FILE_TO_READ = './files/fileToRead.txt';

const read = async () => {
    try {
        const isFileExists = await checkPath(import.meta.url, FILE_TO_READ);
        if (!isFileExists) {
            throw new Error('FS operation failed');
        }

        const content = await readFile(getPath(import.meta.url, FILE_TO_READ), 'utf8');
        console.log(content);
    } catch (error) {
        console.error(error.message);
    }
};

await read();