
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords'
import Input from './Input';

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[ { guessedWord: 'train', letterMatchCount: 3}]} />
     <Input secretWord='party' />
    </div>
  );
}

export default App;
