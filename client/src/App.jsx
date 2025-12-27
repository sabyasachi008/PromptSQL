import sqlLogo from './assets/sql-logo.png'
import styles from './index.module.css'
import { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  
  const onSubmit= (e) => {
    e.preventDefault();
    console.log("form Submitted :",queryDescription)
  };
  return (
      <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon}/>
      <h2>Generate SQL with AI</h2>
      <form onSubmit={onSubmit}>
        <input 
        type="text"
        name="query-description"
        placeholder="Describe your Query" 
        onChange={(e) => setQueryDescription(e.target.value)}     //on change it would take the e(Event).target.value
        />
        <input type="submit" 
        value="Generate Query"
        />
      </form>
    </main>
  )
}

export default App
 