const ContatoFactory = require('./ContatoFactory');
const Contato = require('./Contato');

class ContatoFactoryImpl extends ContatoFactory {
  criarContato(nome, telefone, email) {
    return new Contato(nome, telefone, email);
  }
}

module.exports = ContatoFactoryImpl;