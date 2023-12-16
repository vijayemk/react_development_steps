import { useState } from 'react';
import './App.css';

function App() {

  const [add, setAdd]=useState(0)

  

  const handleAdd=()=>{
    setAdd(add +1)
  }
  return (
    <div className="App">
       count {add}
      <button onClick={handleAdd}>+</button>
    
    </div>
  );
}

export default App;
