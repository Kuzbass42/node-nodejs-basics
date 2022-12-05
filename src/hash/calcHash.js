import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { getPath } from '../utils/index.js';

const HASH_ALGORITHM = 'SHA256';
const DIGEST_ENCODING = 'HEX';
const FILE_PATH = './files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    try {
        const buffer = await readFile(getPath(import.meta.url, FILE_PATH));
        console.log(createHash(HASH_ALGORITHM).update(buffer).digest(DIGEST_ENCODING));
    } catch (error) {
        console.error('Error while calculating hash', error);
    }
};

await calculateHash();