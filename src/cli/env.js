import process from 'process';

const KEY_PREFIX = 'RSS_';

const parseEnv = () => {
    let envsArray = [];

    const envs = process.env;
    for (let key in envs) {
        if (key && envs.hasOwnProperty(key) && key.startsWith(KEY_PREFIX)) {
            envsArray.push(`${key}=${envs[key]}`);
        }
    }

    console.log(envsArray.join('; '));
};

parseEnv();