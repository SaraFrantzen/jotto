import React, { useState } from "react";
import PropTypes from "prop-types";
import {useSelector} from 'react-redux';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const success = useSelector(state => state.success)

  if (success) {
   return <div data-test="component-input" />;
  }
  
  return (
    <div data-test="component-input">
      <form>
        <input
          data-test="input-box"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
          data-test="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
