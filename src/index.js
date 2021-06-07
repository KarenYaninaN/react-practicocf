import React from 'react';
import { render } from 'react-dom';

//function SaludarEnIdiomas({idioma}){
//if (idioma==="es")return <p>Hola</p>;
//if (idioma==="en")return <p>Hello</p>;
/*if (idioma==="es"){
  return <span>Hola </span>;
}
  else{
    return <span>Hello</span>;
  }
}
*/
const Saludo=()=>{
  const nombre='Noel';
  const idioma = "en";
  if (idioma=="es")
  {
    return <p> Hola </p>
  }else if(idioma=="en"){
    return <p>Hello </p>
  }

  //return{<div>{idioma==="en"? <p><Hello/p>:<p>Hola</p>}</div>}
  //return {
  
 // <p> <SaludarEnIdiomas idioma="en"/>Aprendiendo a montar componentes {`${nombre}:)`} </p>;
  
}

const Btn = ()=>{
  return React.createElement("button",{
    onClick: ()=> alert("Hola")
  },"Enviar");
}

const nombres=[ //lista desordenada
  'Karen',
  'Yanina',
  'Apaza',
]
function getNombres(){

  
}

const App = () => {
  return <h1> <Saludo/>Hola Mundo Karen Yanina </h1>;
}

render(<App />, document.getElementById('root'));
//render(<Btn />, document.getElementById('root'));