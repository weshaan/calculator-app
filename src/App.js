import React,{useState} from 'react';
import './App.css';

function App(){
  const[display,setDisplay]=useState('');
  const[a, setA]=useState(0);

  const appendToDisplay=(input)=>{
    let newDisplay = display;

    if (input==='%'){
      input='';
      newDisplay/=100;
    }
    if (input==='s'){
      if (a%2===0){
        input='-';
      }else{
        input='';
        const lastIndex=newDisplay.lastIndexOf('-');
        newDisplay=
          newDisplay.slice(0,lastIndex)+
          '+'+
          newDisplay.slice(lastIndex+1);
      }
      setA(a+1);
    }
    if (input!=='-'){
      setA(0);
    }
    setDisplay(newDisplay + input);
  };

  const clearScreen=()=>{
    setDisplay('');
  };

  const calculate=()=>{
    try{
      setDisplay(eval(display).toString());
    }catch (error){
      setDisplay('Syntax Error');
    }
  };

  return (
    <div className="calculator">
      <input id="display" readOnly placeholder="0" value={display} />
      <div id="keys">
        <button onClick={clearScreen}>C</button>
        <button onClick={() => appendToDisplay('s')}>+-</button>
        <button onClick={() => appendToDisplay('%')}>%</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>X</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button id="solve" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
