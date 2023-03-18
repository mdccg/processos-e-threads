function metodoBolha(vetor: number[]) {
  for (let i = 0; i < vetor.length; ++i) {
    for (let j = 0; j < vetor.length - 1; ++j) {
      const auxiliar = vetor[j];
      vetor[j] = vetor[j + 1];
      vetor[j + 1] = auxiliar;
    }
  }
}

const vetor = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.time('Cronômetro');

metodoBolha(vetor);

console.timeEnd('Cronômetro');