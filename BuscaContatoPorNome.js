class BuscaContatoPorNome {
  buscarContato(contatos, nome) {
    return contatos.find(contato => contato.nome.toLowerCase() === nome.toLowerCase());
  }
}

module.exports = BuscaContatoPorNome;
