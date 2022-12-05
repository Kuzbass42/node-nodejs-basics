import * as fs from 'fs';
import { stdin } from 'process';
import { getPath } from '../utils/index.js';

const FILE_NAME = './files/fileToWrite.txt';

const write = async () => {
    try {
        const filePath = getPath(import.meta.url, FILE_NAME);
        const writeStream = fs.createWriteStream(filePath);
        stdin.pipe(writeStream);
    } catch(error) {
        console.error(error);
    }
};

await write();