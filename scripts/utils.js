const generarNumeroAleatorio = () => Math.floor(Math.random() * 6 ) + 1

function reducirPuntos(elArray) { 
  return elArray.reduce( (acc, num) =>  acc + num)
}



export {generarNumeroAleatorio, reducirPuntos}