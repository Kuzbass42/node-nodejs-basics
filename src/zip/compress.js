import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { getPath } from '../utils/index.js';

const ARCHIVE_NAME = 'archive.gz';
const FILE_TO_COMPRESS = './files/fileToCompress.txt';

const compress = async () => {
    try {
        const moduleUrl = import.meta.url;
        const source = createReadStream(getPath(moduleUrl, FILE_TO_COMPRESS));
        const target = createWriteStream(getPath(moduleUrl, ARCHIVE_NAME));
        await promisify(pipeline)(source, createGzip(), target);
    } catch(error) {
        console.error('Error while compressing file', error);
    }
};

await compress();