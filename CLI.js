const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log('\n===== MENU =====');
  console.log('1. Adicionar Contato');
  console.log('2. Remover Contato');
  console.log('3. Listar Contatos');
  console.log('4. Buscar Contato por Nome');
  console.log('5. Sair');
}

function adicionarContato(gerenciadorContatos) {
  rl.question('Nome: ', nome => {
    rl.question('Telefone: ', telefone => {
      rl.question('Email: ', email => {
        gerenciadorContatos.adicionarContato(nome, telefone, email);
        console.log('Contato adicionado com sucesso!');
        menu();
        selecionarOpcao(gerenciadorContatos);
      });
    });
  });
}

function removerContato(gerenciadorContatos) {
  rl.question('Nome do contato a ser removido: ', nome => {
    gerenciadorContatos.removerContato(nome);
    console.log('Contato removido com sucesso!');
    menu();
    selecionarOpcao(gerenciadorContatos);
  });
}

function listarContatos(gerenciadorContatos) {
  const contatos = gerenciadorContatos.listarContatos();
  console.log('\n===== CONTATOS =====');
  contatos.forEach(contato => {
    console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
  });
  menu();
  selecionarOpcao(gerenciadorContatos);
}

function buscarContatoPorNome(gerenciadorContatos) {
  rl.question('Nome do contato a ser buscado: ', nome => {
    const contato = gerenciadorContatos.buscarContato(nome);
    if (contato) {
      console.log('Contato encontrado:');
      console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
    } else {
      console.log('Contato não encontrado.');
    }
    menu();
    selecionarOpcao(gerenciadorContatos);
  });
}

function selecionarOpcao(gerenciadorContatos) {
  rl.question('Selecione uma opção: ', opcao => {
    switch (opcao) {
      case '1':
        adicionarContato(gerenciadorContatos);
        break;
      case '2':
        removerContato(gerenciadorContatos);
        break;
      case '3':
        listarContatos(gerenciadorContatos);
        break;
      case '4':
        buscarContatoPorNome(gerenciadorContatos);
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opção inválida!');
        menu();
        selecionarOpcao(gerenciadorContatos);
    }
  });
}
module.exports = {
    menu,
    selecionarOpcao
  };
