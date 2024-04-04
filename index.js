const Contato = require('./Contato');
const ContatoFactoryImpl = require('./ContatoFactoryImpl');
const GerenciadorContatos = require('./GerenciadorContatos');
const BuscaContatoPorNome = require('./BuscaContatoPorNome');
const { menu, selecionarOpcao } = require('./CLI');

const contatoFactory = new ContatoFactoryImpl();
const buscaStrategy = new BuscaContatoPorNome();
const gerenciadorContatos = new GerenciadorContatos(contatoFactory, buscaStrategy);

menu();
selecionarOpcao(gerenciadorContatos);

