function validar() {
  var indicacaoUm = formulario.indicacaoUm.value
  var indicacaoDois = formulario.indicacaoDois.value
  var cor = formulario.cor.value
  var num = formulario.num.value

  if (indicacaoUm == '') {
    alert('Preencha a primeira indicação!')
    formulario.indicacaoUm.focus()
    return
  }
  if (indicacaoDois == '') {
    alert('Preencha a segunda indicação!')
    formulario.indicacaoDois.focus()
    return
  }
  if (cor == '') {
    alert('Preencha a cor!')
    formulario.cor.focus()
    return
  }
  if (num == '') {
    alert('Preencha o número!')
    formulario.num.focus()
    return
  }
  alert('Formulário Enviado')
}
