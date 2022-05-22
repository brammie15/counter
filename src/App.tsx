import type { Component } from 'solid-js';

// import styles from './App.module.css';
import Counter from './counter';
// import "./main.css"

const App: Component = () => {
  return (
    <div>
      <header class="bg-sky-500 flex justify-center">
        <div class='box'>
          <h1 class="text-5xl m-5">Click!</h1>
        </div>
      </header>

      <main>
        <Counter />
      </main>
    </div>
  );
};

export default App;
