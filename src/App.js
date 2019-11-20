import React, { useEffect, useRef, useState } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';

function App() {
  const childDivRef = useRef(null);
  const [height, setHeight] = useState(0);  
  const [width, setWidth] = useState(0);  
  useEffect(() => {
    const { offsetWidth, offsetHeight } = childDivRef.current;
    setWidth(offsetWidth);
    setHeight(offsetHeight);
    
    console.log('Changed height property', offsetHeight);
  }, [childDivRef]);

  return <>
    <h1>Child component with Forwarded Ref</h1>
    <div className="description">
      By using <a href="https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components" target="_blank" rel="noopener noreferrer">forwarding reference</a> technique App component can easily access child component's properties.
      The repository represents the answer for <a href="https://stackoverflow.com/questions/58942210/how-to-get-size-of-an-element-in-an-react-app-that-is-totally-based-on-functiona" target="_blank" rel="noopener noreferrer">this Stack Overflow question</a>.
    </div>
    <h2>Let's assume you have a form in the following Child component:</h2>
    <ChildComponent ref={childDivRef} />

    <h3>Properties of child component:</h3>
    <p>In this App component the accessed child component properties are the following:</p>
    <p>Width is: <strong>{`${width}px`}</strong></p>
    <p>Height is: <strong>{`${height}px`}</strong></p>
  </>
}

export default App;