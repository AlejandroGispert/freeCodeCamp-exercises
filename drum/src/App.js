import React, { useEffect } from "react";
import "./App.css";

function App() {
  function colors(drumPad, key) {
    const colors = {
      Q: "#ff0000",
      W: "#00ff00",
      E: "#0000ff",
      A: "#00ffff",
      S: "#ffa500",
      D: "#cfcf08",
      Z: "#800080",
      X: "#ffff00",
      C: "#ff0ff0",
      // Add more colors as needed
    };
    const displayText = {
      Q: "Heater 1",
      W: "Heater 2",
      E: "Heater 3",
      A: "Heater 4",
      S: "Clap",
      D: "Open HH",
      Z: "Kick n' Hat",
      X: "Kick",
      C: "Closed HH",
      // Add more mappings as needed
    };

    drumPad.style.transform = "translateY(-4px)";
    drumPad.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.6)";
    drumPad.style.backgroundColor = colors[key];

    setTimeout(() => {
      drumPad.style.transform = "translateY(0px)";
      drumPad.style.boxShadow = "";
      drumPad.style.backgroundColor = "";
    }, 100);

    const display = document.querySelector("#display");

    display.textContent = displayText[key] || `Unknown`; // Fallback text if key doesn't match
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const audioPad = document.querySelector(`.clip[data-key="${key}"]`);
      const drumPad = document.querySelector(`.drum-pad[data-key="${key}"]`);

      if (audioPad) {
        playSound(audioPad.id);
      }

      colors(drumPad, key);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }); // Depend on `isStarted` state

  function playSound(id) {
    const drumPad = document.querySelector(`.drum-pad[data-key="${id}"]`);
    colors(drumPad, id);

    const audio = document.getElementById(id);
    console.log(audio); // Check if the audio element is found
    if (audio) {
      // Ensure `play` is indeed a function
      audio
        .play()
        .then(() => console.log(`${id} played`))
        .catch((error) => console.error(`Error playing ${id}:`, error));
    } else {
      console.error(
        `Audio element not found or play is not a function for ${id}`
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>DRUM MACHINE</h1>
        <div id="drum-machine" className="outer-container">
          <div id="display" className="inner-container">
            <div id="screen">Drum Pad Tech...</div>
          </div>
          <button
            className="drum-pad"
            id="Heater-1"
            data-key="Q"
            onClick={() => {
              playSound("Q");
            }}
          >
            Q
            <audio
              id="Q"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
              className="clip"
              data-key="Q"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-2"
            data-key="W"
            onClick={() => {
              playSound("W");
            }}
          >
            W
            <audio
              id="W"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
              className="clip"
              data-key="W"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-3"
            data-key="E"
            onClick={() => {
              playSound("E");
            }}
          >
            E
            <audio
              id="E"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
              className="clip"
              data-key="E"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-4"
            data-key="A"
            onClick={() => {
              playSound("A");
            }}
          >
            A
            <audio
              id="A"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
              className="clip"
              data-key="A"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Clap"
            data-key="S"
            onClick={() => {
              playSound("S");
            }}
          >
            S
            <audio
              id="S"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
              className="clip"
              data-key="S"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Open-HH"
            data-key="D"
            onClick={() => {
              playSound("D");
            }}
          >
            D
            <audio
              id="D"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
              className="clip"
              data-key="D"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Kick-n-Hat"
            data-key="Z"
            onClick={() => {
              playSound("Z");
            }}
          >
            Z
            <audio
              id="Z"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
              className="clip"
              data-key="Z"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Kick"
            data-key="X"
            onClick={() => {
              playSound("X");
            }}
          >
            X
            <audio
              id="X"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
              className="clip"
              data-key="X"
            ></audio>
          </button>
          <button
            className="drum-pad"
            id="Closed-HH"
            data-key="C"
            onClick={() => {
              playSound("C");
            }}
          >
            C
            <audio
              id="C"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
              className="clip"
              data-key="C"
            ></audio>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
