function menu_microondas(pratoDisponivel, tempoCustomizado) {

  let alimento = pratoDisponivel.toLowerCase()
  let tempo = 0

  switch (alimento) {
    case "pipoca":
      tempo = pipoca = 10
      break
    case "macarrão":
      tempo = 8
      break
    case "carne":
      tempo = 15
      break
    case "feijão":
      tempo = 12
      break
    case "brigadeiro":
      tempo = 8
      break
    default:
      return "Prato inexistente"

  }
  if (tempoCustomizado >= 0 && tempoCustomizado < tempo) {
    console.log("Tempo Insuficiente!") 


  } else if (tempoCustomizado > (tempo * 2) &tempoCustomizado < (tempo * 3)) {
  console.log ("A Comida Queimou!")

  
  } else if (tempoCustomizado >= (tempo * 3)) {
    console.log ("Kabum!")
  }

  console.log("Prato pronto, bom apetite")



}
