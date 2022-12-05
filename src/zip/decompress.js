import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { getPath } from '../utils/index.js';

const ARCHIVE_NAME = 'archive.gz';
const DECOMPRESS_FILE_NAME = 'fileToCompress.txt';

const decompress = async () => {
    try {
        const moduleUrl = import.meta.url;
        const source = createReadStream(getPath(moduleUrl, ARCHIVE_NAME));
        const target = createWriteStream(getPath(moduleUrl, DECOMPRESS_FILE_NAME));
        await promisify(pipeline)(source, createGunzip(), target);
    } catch(error) {
        console.error('Error while decompressing archive', error);
    }
};

await decompress();