```javascript
// pages/aboutSolution.js
import {useEffect, useState, useRef} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(prev => prev + 1);
      countRef.current = countRef.current + 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCount(countRef.current)
  },[countRef.current])

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```