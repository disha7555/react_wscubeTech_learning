import './App.css';
import Register from './Register';
import React from 'react';
function App() {
  const [showpass,setShowPass]=React.useState(true); 
  const showPassHandler=() => {
    setShowPass(!showpass); 
  }
  return (
    <div className="App">
      <Register showPassHandler={showPassHandler} showpass={showpass} />
    </div>
  );
}

export default App;
