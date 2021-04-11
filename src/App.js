import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { useEffect } from "react";
import { getSecretWord } from "./actions";
import { useSelector } from "react-redux";

const App = () => {
  //use useSelector hook to get the values from state
  const success = useSelector(state => state.success)
  const guessedWords = useSelector(state => state.guessedWords)
 const secretWord = 'party'

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
