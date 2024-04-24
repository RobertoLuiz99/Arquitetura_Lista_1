class BuscaContatoPorNome {
  buscarContato(contatos, nome) {
    const contatosEncontrados = contatos.filter(contato => contato.nome.toLowerCase() === nome.toLowerCase());
    return contatosEncontrados.length > 0 ? contatosEncontrados[0] : null;
  }
}

module.exports = BuscaContatoPorNome;