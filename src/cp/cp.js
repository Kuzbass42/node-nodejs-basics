import { fork } from 'child_process';
import { getPath } from '../utils/index.js';

const SCRIPT_PATH = './files/script.js';

const spawnChildProcess = async (args) => {
    const scriptPath = getPath(import.meta.url, SCRIPT_PATH);
    fork(scriptPath, args);
};

spawnChildProcess();