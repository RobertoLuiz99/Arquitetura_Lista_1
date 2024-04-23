const Contato = require('./Contato');

class ContatoFactory {
  criarContato(nome, telefone, email) {
    throw new Error('O método criarContato deve ser implementado por subclasses.');
  }
}

module.exports = ContatoFactory;