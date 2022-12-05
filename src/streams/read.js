import * as fs from 'fs';
import { stdout } from 'process';
import { getPath } from '../utils/index.js';

const FILE_NAME = './files/fileToRead.txt';

const read = async () => {
    try {
        const filePath = getPath(import.meta.url, FILE_NAME);
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(stdout);
    } catch(error) {
        console.error(error);
    }
};

await read();