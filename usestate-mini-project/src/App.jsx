import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='main'>
      
      <div className="num">
        <h1>{count}</h1>
      </div>
<div className='btn'>
      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>

      <button onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default App
