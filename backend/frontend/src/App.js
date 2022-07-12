import styles from './App.module.css';
import React from 'react'
import ClockComponent from './pages/clock/ClockComponent';
import NewsComponent from './pages/news/NewsComponent';
import QuoteComponent from './pages/quote/QuoteComponent'

function App() {
  return (
    <>
    <div className={styles.app}>
      <ClockComponent/>
      <NewsComponent/>
    </div>
    <QuoteComponent/>
    </>
  );
}
export default App;
