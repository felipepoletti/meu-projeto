function Pessoa({ foto, fotoDescricao, nome, idade, profissao }) {
  return(
    <div>
      <img src={foto} alt={fotoDescricao}/>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa;