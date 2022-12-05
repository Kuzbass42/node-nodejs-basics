import { argv } from 'process';

const parseArgs = () => {
    let argsArray = [];

    const args = argv.slice(2);
    for (let i = 0; i < args.length; i = i + 2) {
        const key = args[i].slice(2);
        if (key) {
            argsArray.push(`${key} is ${args[i + 1]}`);
        }
    }

    console.log(argsArray.join(', '));
};

parseArgs();