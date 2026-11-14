 import * as readline from 'node:readline/promises';
 import { stdin as input, stdout as output } from 'node:process';
 const rl = readline.createInterface({ input, output });
 let tabuada = await rl.question('Qual tabuada? ');

for(let i = 1; i <= 10; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}