import react, {useState} from 'react'
import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla'

function App() {
  const toggledarkmode = () => {
    document.getElementById('App').classList.toggle('modo-oscuro')
    document.getElementById('App').classList.toggle('modo-claro')
    document.getElementById('calcu').classList.toggle('modo-oscuroCalcu')
  }
  return (
    <div id='App' className="App modo-claro">
      <div className='Header'>
        <h1>Bienvenides a Calcutroska!</h1>
        <button onClick={toggledarkmode}>🌙</button>      
      </div>
      <div id='calcu' className='calculadora'>
      <Pantalla />
      <div className='linea'>
          <Boton>AC</Boton>
          <Boton>()</Boton>
          <Boton>%</Boton>
          <Boton>/</Boton>
        </div>
        <div className='linea'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='linea'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='linea'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='linea'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>DEL</Boton>
          <Boton>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
