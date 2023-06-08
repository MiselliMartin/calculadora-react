import react, {useState} from 'react'
import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla'
import { evaluate } from 'mathjs'
/*import { darkmode, noEsNumero, esDEL, isAC, isEqual } from './components/Boton.jsx'*/


function App() {
  const [input, setInput] = useState("");
  
  const escribirPantalla = valor => {
      setInput(input + valor);  
  }
  const resultado = () => {
    try {
      setInput(evaluate(input))
    } catch(error) {
      setInput("Syntax ERROR")
    }
    
  }
  const borrar = () => {
    setInput((prevValue) => prevValue.slice(0, -1));
  };

  /*const parentesis = () => {
    let letras = input.split("");
    let parentesisAbiertos = letras.filter(letra => letra == ("("));
    let parentesisAbiertosCantidad = parentesisAbiertos.length
    let parentesisCerrados = letras.filter(letra => letra == (")"));
    let parentesisCerradosCantidad = parentesisCerrados.length
    if (parentesisAbiertosCantidad > parentesisCerradosCantidad) {
      setInput(input + ')');
    } else {
      setInput(input + "(")
    }
    }*/
    /*setInput((prevValue) => prevValue.slice(0, -1));*/



/*
      <button onClick={toggledarkmode}>🌙</button>      
  const toggledarkmode = () => {
    document.getElementById('App').classList.toggle('modo-oscuro')
    document.getElementById('App').classList.toggle('modo-claro')
    document.getElementById('calcu').classList.toggle('modo-oscuroCalcu')
    darkmode(document.getElementById('boton').value)
  }
*/
  
  return (
    <div id='App' className="App modo-claro">
      <div className='Header'>
        <h1>Bienvenides a Calcutroska!</h1>
      </div>
      <div id='calcu' className='calculadora'>
      <Pantalla input={input}/>
      <div className='linea'>
          <Boton manejarClic={()=>setInput("")}>AC</Boton>
          <Boton manejarClic={escribirPantalla}>(</Boton>
          <Boton manejarClic={escribirPantalla}>)</Boton>
          <Boton manejarClic={escribirPantalla}>/</Boton>
        </div>
        <div className='linea'>
          <Boton manejarClic={escribirPantalla}>7</Boton>
          <Boton manejarClic={escribirPantalla}>8</Boton>
          <Boton manejarClic={escribirPantalla}>9</Boton>
          <Boton manejarClic={escribirPantalla}>*</Boton>
        </div>
        <div className='linea'>
          <Boton manejarClic={escribirPantalla}>4</Boton>
          <Boton manejarClic={escribirPantalla}>5</Boton>
          <Boton manejarClic={escribirPantalla}>6</Boton>
          <Boton manejarClic={escribirPantalla}>-</Boton>
        </div>
        <div className='linea'>
          <Boton manejarClic={escribirPantalla}>1</Boton>
          <Boton manejarClic={escribirPantalla}>2</Boton>
          <Boton manejarClic={escribirPantalla}>3</Boton>
          <Boton manejarClic={escribirPantalla}>+</Boton>
        </div>
        <div className='linea'>
          <Boton manejarClic={escribirPantalla}>0</Boton>
          <Boton manejarClic={escribirPantalla}>.</Boton>
          <Boton manejarClic={borrar}>DEL</Boton>
          <Boton manejarClic={resultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
