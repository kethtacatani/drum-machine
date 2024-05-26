import React, { useState } from "react";
import "./App.css";

const getAudioPlaying = (audioName: string) => {
  return audioName;
};

function App() {


  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isBankOn, setIsBankOn] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(getAudioPlaying(""));
  const [volume, setVolume] = useState(80);

  
  const handleTogglePower = () => {
    setIsPowerOn((prevIsPowerOn) => !prevIsPowerOn);
    setAudioPlaying(getAudioPlaying(""));
  };

  const handleBankToggle = () => {
    setIsBankOn((prevIsBankOn) => !prevIsBankOn);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleClick = (title: string, key: string) => {
    if (isPowerOn) {
      setAudioPlaying(getAudioPlaying(title));
      const audioElement = document.getElementById(key) as HTMLAudioElement;
      if (audioElement) {
        audioElement.volume = volume / 100;
        audioElement.play();
      }
      
    
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      const audioElement = document.getElementById(event.key) as HTMLAudioElement;
      if (audioElement) {
        audioElement.play();
      }
  };


  return (
    <>
      <div id="drum-machine">
        <div id="display">
        
          <div className="pads">
      <p className="title">Drum Machine</p>

            <div className="pad-row">
              <button 
                onKeyDown={handleKeyPress}
                onClick={() =>
                  handleClick(isBankOn ? "Chord_1" : "Heater-1", "Q")
                }
                id="pad-q"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="Q"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "Chord_1" : "Heater-1"}.mp3`}
                ></audio>
                Q
              </button>
              <button 
              onKeyDown={handleKeyPress}
                onClick={() => handleClick(isBankOn ? "Chord_2" : "Heater-2",'W')}
                id="pad-w"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="W"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "Chord_2" : "Heater-2"}.mp3`}
                ></audio>
                W
              </button>
              <button
              onKeyDown={handleKeyPress}
                onClick={() => handleClick(isBankOn ? "Chord_3" : "Heater-3",'E')}
                id="pad-e"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="E"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "Chord_3" : "Heater-3"}.mp3`}
                ></audio>
                E
              </button>
            </div>
            <div className="pad-row">
              <button
              onKeyDown={handleKeyPress}
                onClick={() =>
                  handleClick(isBankOn ? "Give_us_a_light" : "Heater-4_1",'A')
                }
                id="pad-a"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="A"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "Give_us_a_light" : "Heater-4_1"}.mp3`}
                ></audio>
                A
              </button> 
              <button onKeyDown={handleKeyPress}
                onClick={() => handleClick(isBankOn ? "Dry_Ohh" : "Heater-6",'S')}
                id="pad-s"
                className="drum-pad"
              >
                <audio 
                  className="clip"
                  id="S"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "Dry_Ohh" : "Heater-6"}.mp3`}
                ></audio>
                S
              </button>
              <button onKeyDown={handleKeyPress}
                onClick={() => handleClick(isBankOn ? "Bld_H1" : "Dsc_Oh",'D')}
                id="pad-D"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="D"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "Bld_H1" : "Dsc_Oh"}.mp3`}
                ></audio>
                D
              </button>
            </div>
            <div className="pad-row">
              <button onKeyDown={handleKeyPress}
                onClick={() =>
                  handleClick(isBankOn ? "punchy_kick_1" : "Kick_n_Hat",'Z')
                }
                id="pad-z"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="Z"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "punchy_kick_1" : "Kick_n_Hat"}.mp3`}
                ></audio>
                Z
              </button>
              <button onKeyDown={handleKeyPress}
                onClick={() =>
                  handleClick(isBankOn ? "side_stick_1" : "RP4_KICK_1",'X')
                }
                id="pad-x"
                className="drum-pad"
              >
                <audio 
                  className="clip"
                  id="X"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ? "side_stick_1" : "RP4_KICK_1"}.mp3`}
                ></audio>
                X
              </button>
              <button onKeyDown={handleKeyPress}
                onClick={() => handleClick(isBankOn ? "Brk_Snr" : "Cev_H2",'C')}
                id="pad-v"
                className="drum-pad"
              >
                <audio
                  className="clip"
                  id="C"
                  src={`https://s3.amazonaws.com/freecodecamp/drums/${isBankOn ?  "Brk_Snr" : "Cev_H2"}.mp3`}
                ></audio>
                C
              </button>
            </div>
          </div>
          <div className="right-pad">
            <p>Power</p>
            <div id="power" className="switch" onClick={handleTogglePower}>
              <div
                style={{ float: isPowerOn ? "right" : "left" }}
                className="inner"
              ></div>
            </div>
            <div className="pad-name-container">
              <p id="pad-name">{isPowerOn ? audioPlaying : ""}</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              className="range"
              value={volume}
              onChange={handleVolumeChange}
            />
            <p>Bank</p>
            <div id="bank" className="switch" onClick={handleBankToggle}>
              <div
                style={{ float: isBankOn ? "right" : "left" }}
                className="inner"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
