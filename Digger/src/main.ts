import Digger from './index';
import config from './config.json' assert { type: 'json'};

const miner = new Digger({
    size: 4,
    items: ['Emeralds', 'Diamonds', "Gold", "Coal"],
    status: true
});

console.log(miner);