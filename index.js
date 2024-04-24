const ContatoFactoryImpl = require('./ContatoFactoryImpl');
const BuscaContatoPorNome = require('./BuscaContatoPorNome');
const GerenciadorContatos = require('./GerenciadorContatos');
const Menu = require('./Menu');
const InputHandler = require('./InputHandler');

const contatoFactory = new ContatoFactoryImpl();
const buscaStrategy = new BuscaContatoPorNome();
const gerenciadorContatos = new GerenciadorContatos(contatoFactory, buscaStrategy);

async function iniciar() {
  Menu.exibir();
  const opcao = await InputHandler.selecionarOpcao();

  switch (opcao) {
    case '1':
      await adicionarContato();
      break;
    case '2':
      await removerContato();
      break;
    case '3':
      listarContatos();
      break;
    case '4':
      await buscarContatoPorNome();
      break;
    case '5':
      console.log('Saindo...');
      process.exit(0);
    default:
      console.log('Opção inválida!');
  }

  iniciar(); // Chamada recursiva para exibir o menu novamente
}

async function adicionarContato() {
  const nome = await solicitarInput('Nome: ');
  const telefone = await solicitarInput('Telefone: ');
  const email = await solicitarInput('Email: ');

  gerenciadorContatos.adicionarContato(nome, telefone, email);
  console.log('Contato adicionado com sucesso!');
}

async function removerContato() {
  const nome = await solicitarInput('Nome do contato a ser removido: ');
  gerenciadorContatos.removerContato(nome);
  console.log('Contato removido com sucesso!');
}

function listarContatos() {
  const contatos = gerenciadorContatos.listarContatos();
  console.log('\n===== CONTATOS =====');
  contatos.forEach(contato => {
    console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
  });
}

async function buscarContatoPorNome() {
  const nome = await solicitarInput('Nome do contato a ser buscado: ');
  await exibirResultadoBusca(nome);
}

async function exibirResultadoBusca(nome) {
  const contato = gerenciadorContatos.buscarContato(nome);
  if (contato) {
    console.log('Contato encontrado:');
    console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
  } else {
    console.log('Contato não encontrado.');
  }
  await aguardarConfirmacao();
}

async function aguardarConfirmacao() {
  const confirmacao = await solicitarInput('Pressione Enter para retornar ao menu.');
  iniciar();
}

function solicitarInput(pergunta) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(pergunta, resposta => {
      rl.close();
      resolve(resposta);
    });
  });
}

iniciar();

