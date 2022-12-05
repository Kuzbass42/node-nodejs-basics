import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
    const transformer = new Transform({
        transform(chunk, encoding, cb) {
            cb(null, chunk.toString().split('').reverse().join(''))
        },
    });

    stdin.pipe(transformer).pipe(stdout);
};

await transform();