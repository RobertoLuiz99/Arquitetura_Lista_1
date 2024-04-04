const GerenciadorContatos = require('../GerenciadorContatos');
const ContatoFactoryImpl = require('../ContatoFactoryImpl');
const BuscaContatoPorNome = require('../BuscaContatoPorNome');

describe('GerenciadorContatos', function() {
  let gerenciadorContatos;

  beforeEach(function() {
    const contatoFactory = new ContatoFactoryImpl();
    const buscaStrategy = new BuscaContatoPorNome();
    gerenciadorContatos = new GerenciadorContatos(contatoFactory, buscaStrategy);
  });

  it('deve adicionar um novo contato à lista de contatos', function() {
    gerenciadorContatos.adicionarContato('João', '123456789', 'joao@example.com');
    const contatos = gerenciadorContatos.listarContatos();
    const ultimoContato = contatos[contatos.length - 1];
    expect(ultimoContato.nome).toEqual('João');
    expect(ultimoContato.telefone).toEqual('123456789');
    expect(ultimoContato.email).toEqual('joao@example.com');
  });

  it('deve remover um contato da lista de contatos', function() {
    gerenciadorContatos.adicionarContato('Maria', '987654321', 'maria@example.com');
    gerenciadorContatos.removerContato('Maria');
    const contatos = gerenciadorContatos.listarContatos();
    expect(contatos.length).toEqual(0);
  });

  it('deve listar todos os contatos adicionados', function() {
    gerenciadorContatos.adicionarContato('José', '111111111', 'jose@example.com');
    gerenciadorContatos.adicionarContato('Ana', '222222222', 'ana@example.com');
    const contatos = gerenciadorContatos.listarContatos();
    expect(contatos.length).toEqual(2);
    expect(contatos[0].nome).toEqual('José');
    expect(contatos[1].nome).toEqual('Ana');
  });

  it('deve retornar undefined se o contato não for encontrado', function() {
    const contatoEncontrado = gerenciadorContatos.buscarContato('Ana');
    expect(contatoEncontrado).toBeUndefined();
  });
  
  it('deve encontrar um contato pelo nome', function() {
    gerenciadorContatos.adicionarContato('Carlos', '333333333', 'carlos@example.com');
    const contatoEncontrado = gerenciadorContatos.buscarContato('Carlos');
    expect(contatoEncontrado).toBeDefined();
    expect(contatoEncontrado.nome).toEqual('Carlos');
    expect(contatoEncontrado.telefone).toEqual('333333333');
    expect(contatoEncontrado.email).toEqual('carlos@example.com');
  });
});



