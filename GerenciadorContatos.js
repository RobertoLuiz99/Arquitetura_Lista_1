class GerenciadorContatos {
    constructor(contatoFactory, estrategiaBusca) {
      this.contatos = [];
      this.contatoFactory = contatoFactory;
      this.estrategiaBusca = estrategiaBusca;
    }
  
    adicionarContato(nome, telefone, email) {
      const contato = this.contatoFactory.criarContato(nome, telefone, email);
      this.contatos.push(contato);
    }
  
    removerContato(nome) {
      this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }
  
    listarContatos() {
      return this.contatos;
    }
  
    buscarContato(nome) {
        // Verifica se a estratégia de busca possui o método buscarContato
        if (typeof this.estrategiaBusca.buscarContato === 'function') {
          return this.estrategiaBusca.buscarContato(this.contatos, nome);
        } else {
          throw new Error('A estratégia de busca não possui um método buscarContato implementado.');
        }
      }
  }
  
module.exports = GerenciadorContatos;

