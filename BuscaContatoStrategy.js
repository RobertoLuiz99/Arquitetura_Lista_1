class BuscaContatoStrategy {
    buscarContato(contatos, nome) {
      throw new Error('O método buscarContato deve ser implementado por subclasses.');
    }
  }
  
  module.exports = BuscaContatoStrategy;