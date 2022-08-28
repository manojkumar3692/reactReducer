import { useReducer } from 'react'
import './App.css';
import { AppReducer } from './reducer';

function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    count: 0,
    inputValue: ''
  })

  return (
    <div className="App">
      <div>
        <h4 style={{ margin: '0 auto', margin: '2rem 0rem 0rem', color: 'blue' }}>Counter</h4>
        <button style={{margin: '1rem', border: '1px solid grey', background: 'none', color: 'orange', padding: '10px', width: '100px', borderRadius: '4px'}} onClick={() => dispatch({ type: 'increment', payload: {} })}>Increment</button>
        <button style={{border: '1px solid grey', background: 'none', color: 'orange', padding: '10px', width: '100px', borderRadius: '4px'}} onClick={() => dispatch({ type: 'decrement', paload: {} })}>Decrement</button>
          <h1>{state.count}</h1>
      </div>
      <div>
        <h4 style={{ margin: '0 auto', color: 'green' }}>Input Field</h4>
        <input style={{ height: '40px', width: '300px', margin: '2rem 0rem 0rem' }} type="text" placeholder='please enter a string' onChange={(e) => dispatch({
          type: 'onInputChange', payload: {
            inputValue: e.target.value
          }
        })} />
          <h1>{state.inputValue}</h1>
      </div>
    </div>
  );
}

export default App;
