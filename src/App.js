import{useState}from'react';
import './App.css';

function App() {
  const[number1,setNumber1]=useState(0);
  const[number2,setNumber2]=useState(0);
  const[total,setTotal]=useState(number1+number2);
function calculaterTotal(){
  setTotal(number1+number2)
}
function calculaterTotal1(){
  setTotal(number1*number2)
}
function calculaterTotal2(){
  setTotal(number1-number2)
}
function calculaterTotal3(){
  setTotal(number1/number2)
}
return(
  <div className="App">
    <h1>Calculater</h1>
    <div className="number-input">
      <input className='inp'
      type="number"
      value={number1}
      onChange={(e)=>setNumber1(+e.target.value)}
      placeholder='0'
      />
      <input className='inp'
      type="number"
      value={number2}
      onChange={(e)=>setNumber2(+e.target.value)}
      placeholder="0"
      />
    </div>
    <button className='btn'onClick={calculaterTotal}>Add Them!</button>
    <button className='btn'onClick={calculaterTotal1}>Multiply!</button>
    <button className='btn'onClick={calculaterTotal2}>Subtract!</button>
    <button className='btn'onClick={calculaterTotal3}>Divide!</button>
    <h2>{total}</h2>
  </div>
);
}

export default App;
