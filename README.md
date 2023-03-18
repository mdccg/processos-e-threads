# processos-e-threads

## Sumário

- [processos-e-threads](#processos-e-threads)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este repositório de código foi criado para compor os recursos multimídia de um seminário de Sistemas Operacionais I sobre processos e _threads_. O código-fonte principal, [`index.ts`](./index.ts), utiliza o módulo nativo do Node [`child_process`](https://www.npmjs.com/package/child_process) para executar um comando e vinculá-lo a _threads_ criadas pelo próprio código-fonte. Para este exemplo, foi utilizado o módulo do npm [`cowsay`](https://www.npmjs.com/package/cowsay), o qual exibe uma mensagem em um balão de fala de uma vaca desenhada com ASCII art.

Eis a saída do código-fonte principal:

```console
 ________________
< Sou o processo >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
 _____________________________
< Sou a 1ª thread do processo >
 -----------------------------
       \   ,__,
        \  (oo)____
           (__)    )\
              ||--|| *
 _____________________________
< Sou a 2ª thread do processo >
 -----------------------------
       \   ,__,
        \  (oo)____
           (__)    )\
              ||--|| *
 _____________________________
< Sou a 3ª thread do processo >
 -----------------------------
       \   ,__,
        \  (oo)____
           (__)    )\
              ||--|| *

Processo encerrado com código 0 e sinal null
```

Este foi o primeiro repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Sistemas Operacionais I.

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Módulo auxiliar | [cowsay](https://www.npmjs.com/package/cowsay) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Finalmente, execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```