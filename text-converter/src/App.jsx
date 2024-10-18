import "./App.css";
import React from "react";
// import useSpeechToText from "./useSpeechToText";

const SpeechToTextComponent = () => {
  const { capturedText, isListening, startListening, stopListening } =
    useSpeechToText();

  return (
    <div>
      <p>{capturedText}</p>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  );
};

export default SpeechToTextComponent;
