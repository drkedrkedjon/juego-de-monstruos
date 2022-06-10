import { data } from './data.js'
import { generarNumeroAleatorio } from './utils.js'

class Personaje {
  constructor(data) {
    Object.assign(this, data)
    this.numeros = []
  }
  numerosAleatorios() {
    for (let i = 0; i < this.numeroDados; i++) {
        this.numeros.push(generarNumeroAleatorio())
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

}

const boni = new Personaje(data.boni)

document.querySelector('#el-bueno').innerHTML = boni.generarPersonajeHtml()
boni.numerosAleatorios()



// Generar HTML de los primeros dos personajes al cargar la pagina