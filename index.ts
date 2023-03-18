import { spawn } from 'child_process';
import * as cowsay from 'cowsay';

const comando = 'npx';
const argumentos = ['cowsay', 'Sou o processo'];

const processo = spawn(comando, argumentos);

const vaca = (texto: string, tipo?: | 'bezerro' | 'defunto'): void => {
  const options: cowsay.IOptions = {
    text: texto,
    f: tipo === 'bezerro' ? 'small' : undefined,
    d: tipo === 'defunto',
    g: tipo === 'defunto'
  };

  console.log(cowsay.say(options));
}

// Ilustração da saída do processo
vaca('Sou o processo');

// Cria três threads vinculadas ao processo
for (let contador = 1; contador <= 3; contador++) {
  processo.stdout.on('data', () => {
    vaca(`Sou a ${contador}ª thread do processo`, 'bezerro');
  });
}

// Cria uma thread para exibir erro
processo.stderr.on('data', () => {
  vaca('Algo deu errado', 'defunto');
});

processo.on('exit', (code, signal) => {
  console.log('');
  console.log(`Processo encerrado com código ${code} e sinal ${signal}`);
});