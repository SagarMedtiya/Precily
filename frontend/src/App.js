import './App.css';
import React from 'react'
import {Router, Route} from 'react-router-dom';
import ClockComponent from './pages/clock/ClockComponent';
import NewsComponent from './pages/news/NewsComponent';
import QuoteComponent from './pages/quote/QuoteComponent'

function App() {
  return (
    <>
    <div className="App">
      <ClockComponent/>
      <NewsComponent/>
    </div>
    <QuoteComponent/>
    </>
  );
}
export default App;
