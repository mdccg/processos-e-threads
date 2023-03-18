import { spawn } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

const comando = 'npx';
const argumentos = ['ts-node', 'programa.ts'];

const processo = spawn(comando, argumentos);

processo.stdout.on('data', (saidaCapturada) => {
  console.log(`${saidaCapturada}`);

  const caminho = join(__dirname, 'saida.txt');
  writeFileSync(caminho, saidaCapturada);
});