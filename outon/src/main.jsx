import React from 'react';
import ReactDOM from 'react-dom/client';
import { analyzeScam } from './scamEngine';

function App(){
  const [text,setText]=React.useState('');
  const result=analyzeScam(text);
  return (
    <div style={{fontFamily:'Arial',padding:'30px',maxWidth:'900px',margin:'auto'}}>
      <h1>Outon AI Scam Detector</h1>
      <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder='Paste suspicious message here' style={{width:'100%',height:'180px',padding:'12px'}} />
      <div style={{marginTop:'20px'}}>
        <h2>Risk Level: {result.level}</h2>
        <h3>Score: {result.score}/100</h3>
        <ul>{result.reasons.map((r,i)=><li key={i}>{r}</li>)}</ul>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
