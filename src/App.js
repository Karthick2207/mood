
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import MoodDisplay from "./MoodDisplay";

function App() {
  const [mood, setMood] = useState("");

  return (
    <>
      <div className={`container ${mood}`}>
        <h1>How are you Feeling today?</h1>
        <div className="buttons">
          <button className="happy" onClick={() => setMood("happy")}>Happy</button>
          <button className="sad" onClick={() => setMood("sad")}>Sad</button>
          <button className="angry" onClick={() => setMood("angry")}>Angry</button>
          <button className="excited" onClick={() => setMood("excited")}>Excited</button>
        </div>
      </div>
      <MoodDisplay mood={mood} />
    </>
  );
}

export default App;

