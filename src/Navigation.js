import logo from './logo epet20.png';
import './App.css';



//Funcion temporizador//
setTimeout(Login, 3000 ); 
function Login(){
  console.log('Hola como estas!');
}


//Funcion temporizador//




  //PANTALLA DE CARGA//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="Titulo-carga App-logo-titulo">
          ¡Booky!
        </p>
        
      </header>
    </div>
  );
}

export default App;
 //PANTALLA DE CARGA//