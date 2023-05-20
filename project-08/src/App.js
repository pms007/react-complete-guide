import React, { useCallback, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph,setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  },[]);
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
