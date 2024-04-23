const readline = require('readline');

class InputHandler {
  static async selecionarOpcao() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise(resolve => {
      rl.question('Selecione uma opção: ', opcao => {
        rl.close();
        resolve(opcao);
      });
    });
  }
}

module.exports = InputHandler; 