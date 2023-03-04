import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // First iteration
  const handleIncrease = () => {
    setCount(prev => prev + 1);
  }
  // Second and Fourth iteration
  const handleDecrease = () => {
    setCount(prev => prev - 1);
  }

  useEffect(() => {
    setCount(Math.floor(Math.random() * 10))
    return () => {
      setCount(0);
    }
  }, [])
  // Third iteration
  useEffect(() => {
    if(count > 5) {
      setDynamicClass('green')
    } else if (count > 0 && count <= 5) {
      setDynamicClass('orange')
    } else if (count <= 0) {
      setDynamicClass('red')
    }
  }, [count])
  
  
  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrease}>- Decrease</button>
    </div>
  )
}
