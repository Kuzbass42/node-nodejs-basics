import { copyFile, readdir, mkdir } from 'fs/promises'
import { checkPath, getPath } from '../utils/index.js';

const FOLDER_TO_COPY = './files';
const FOLDER_TO_WRITE = './files_copy';

const copy = async () => {
    try {
        const isFolderToCopyExists = await checkPath(import.meta.url, FOLDER_TO_COPY);
        if (!isFolderToCopyExists) {
            throw new Error('FS operation failed');
        }

        const isFolderToWriteExists = await checkPath(import.meta.url, FOLDER_TO_WRITE);
        if (isFolderToWriteExists) {
            throw new Error('FS operation failed');
        }

        const targetFolderPath = getPath(import.meta.url, FOLDER_TO_WRITE);
        await mkdir(targetFolderPath);

        const sourceFolderPath = getPath(import.meta.url, FOLDER_TO_COPY);
        const fileList = await readdir(sourceFolderPath);

        fileList.forEach(async (file) => {
            const sourceFile = getPath(import.meta.url, `${FOLDER_TO_COPY}/${file}`);
            const targetFile = getPath(import.meta.url, `${FOLDER_TO_WRITE}/${file}`);
            await copyFile(sourceFile, targetFile);
        });
    } catch (error) {
        console.error(error.message);
    }
};

copy();