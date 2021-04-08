import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { useEffect } from "react";
import { getSecretWord } from "./actions";

const App = () => {
  const success = false;
  const secretWord = "party";
  const guessedWord = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
      <Input secretWord="party" success={false} />
    </div>
  );
};

export default App;
