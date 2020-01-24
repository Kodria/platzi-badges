// const element = document.createElement('h1')
// element.innerText = 'Hola mundo'

// const container = document.getElementById('app')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Desarrollador'
// Utilizando JSX

// const element = <h1>Hola mundo</h1> 
// const element = <h1>Hola mi nombre es { new Date().toLocaleDateString() }</h1>
// const element = (<div>
//   <h1>Hola soy {name}</h1>
//   <p>Soy un ingenieroooo </p>
// </div>)

// Utilizando createElement
// const element = React.createElement('a', {href: 'http://platzi.com'}, 'Ir a platzi')
// const element = React.createElement('h1', {}, `Hola soy ${name}`)
const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, `Hola soy ${name}`),
  React.createElement('p', {}, `soy un ingeniero`),
)


const container = document.getElementById('app');

// ReactDOM.render('_que_', '_donde_')
ReactDOM.render(element, container)