import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { getPath } from '../utils/index.js';

const WORKER_PATH = './worker.js';
const INITIAL_NUMBER = 10;

const workerPath = getPath(import.meta.url, WORKER_PATH);

const executeWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData });
        worker.on('message', (data) => resolve({ status: 'resolved', data }));
        worker.on('error', () => reject({ status: 'error', data: null }));
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject({ status: 'error', data: null });
            }
        });
    });
};

const performCalculations = async () => {
    const workers = [];

    for (let i = 0; i < cpus().length; i++) {
        workers.push(executeWorker(INITIAL_NUMBER + i));
    }

    const result = await Promise.allSettled(workers);
    console.log(result.map(item => item.status === 'fulfilled' ? item.value : item.reason));
};

await performCalculations();