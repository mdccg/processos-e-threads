import { spawn } from 'child_process';
import * as cowsay from 'cowsay';

const comando = 'npx';
const argumentos = ['cowsay', 'Sou o processo'];
const processo = spawn(comando, argumentos);
let contador = 0;

console.log(`PID do processo: ${processo.pid}`);

const threadExibeResultado = (data: any) => {
  console.log(`Thread ID: ${++contador}`);
  console.log(`${data}`);
}

const threadExibeFilhotinho = (data: any) => {
  console.log(`Thread ID: ${++contador}`);
  console.log(cowsay.say({ text: 'Sou a thread do processo', f: 'small' }));
}

const threadExibeErro = (data: any) => {
  console.log(`Thread ID: ${++contador}`);
  console.log(cowsay.say({ text: 'Algo de errado não está certo', d: true, g: true }));
}

processo.stdout.on('data', threadExibeResultado);

for (let i = 0; i < 5; ++i) {
  processo.stdout.on('data', threadExibeFilhotinho); // Cria cinco threads
}

processo.stderr.on('data', threadExibeErro);

processo.on('exit', (code, signal) => {
  console.log(`Processo encerrado com código ${code} e sinal ${signal}`);
});