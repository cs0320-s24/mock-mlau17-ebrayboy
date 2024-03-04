import { useState } from 'react';
import '../styles/App.css';
import { LoginButton } from './LoginButton';
import REPL from './REPL';
import { registerCommand } from './CommandRegistry';

/**
 * This is the highest level component that checks if the user is logged in before running our REPL
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <p className="App-header">
        <h1>Mock</h1>
        <LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </p>
      {/*This is where the APP checks if the isLoggedIn is returning true before running the program*/}
      { isLoggedIn && <REPL/> }
    </div>
  );
}

export default App;