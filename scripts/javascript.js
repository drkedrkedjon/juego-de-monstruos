import { data } from './data.js'
import { generarNumeroAleatorio } from './utils.js'

const losMalos = ['popo', 'luis', 'clau']
class Personaje {
  constructor(data) {
    Object.assign(this, data)
    this.numeros = []
    this.aCargar = true
    this.puntosAtaque = 0
  }

  numerosAleatorios() {
    this.numeros = []
    for (let i = 0; i < this.numeroDados; i++) {
      if (this.aCargar) {
        this.numeros.push(0)
      } else {
        this.numeros.push(generarNumeroAleatorio())
      }
    }
    return this.numeros
  }

  generarDadosHtml() {
    const numerosArray = this.numerosAleatorios()
    return numerosArray.map( num => `<div class="numero flex">${num}</div>`).join('')
  }

  generarPersonajeHtml() {
    const { nombre, imagen, energia, numeroDados, puntuacionActual } = this
    return `
        <p class="nombre-persona">${nombre}</p>
        <img src="${imagen}" alt="">
        <p>Energia: <span class="energia">${energia}</span></p>
        <div class="barra-energia"></div>
        <div class="los-numeros flex">
          ${this.generarDadosHtml()}
        </div>
      `
  }

  renderPersona() {
    this.generarDadosHtml
  }

}

function reducirPuntos(elArray) { 
  return elArray.reduce( (acc, num) =>  acc + num)
}

function puntuacion() {

}

document.querySelector('#btn').addEventListener('click', atacar)
function atacar() {
  boni.aCargar = false
  elMalo.aCargar = false
  document.querySelector('#el-bueno').innerHTML = boni.generarPersonajeHtml()
  document.querySelector('#el-malo').innerHTML = elMalo.generarPersonajeHtml()
}

const boni = new Personaje(data.boni)
const elMalo = new Personaje(data[losMalos.shift()])

document.querySelector('#el-bueno').innerHTML = boni.generarPersonajeHtml()
document.querySelector('#el-malo').innerHTML = elMalo.generarPersonajeHtml()




// Generar HTML de los primeros dos personajes al cargar la pagina