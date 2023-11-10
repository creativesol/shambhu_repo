import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { deccrementByVal, decrement, increment, incrementByVal } from './app/counter';

function App() {
  const count = useSelector((state)=> state.counter.value);
  
   const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux-tool-kit Counter Demo</h1><hr />
      <div>Count: {count}</div>
      <div><button onClick={()=> dispatch(increment())}>Increment</button>&nbsp;<button onClick={()=> dispatch(decrement())}>Decrement</button>&nbsp; <button onClick={()=>dispatch(incrementByVal(5))}>Increment By 5</button>&nbsp; <button onClick={()=>dispatch(deccrementByVal(5))}>Decrement By 5</button></div>
    </div>
  );
}

export default App;
