import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

 function handleClick(id){
  
    setItems(items && items.filter(item => item.id !== id))
 }

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input autoFocus name="text" type="text" />
        <button>Add</button>
      </form>
      <ul>
          {items && items.map((item) => 
               <li key={item.id} className={item.completed ? styles.completed : ""}>
                   {item.text} <button onClick={() => handleClick(item.id)}>[X]</button>
              </li>
            )}
      </ul>
    </main>
  );
}

export default App;
