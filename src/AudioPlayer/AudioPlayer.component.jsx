import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore, useActions } from "easy-peasy";
import "./AudioPlayer.component.css";

const checkFavouriteExists = (id, favourites) => {
  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i].id === id) {
      return true;
    }
  }
  return false;
};

function AudioPlayer() {
  const addFavouritesToLocalStorage = useActions(
    actions => actions.addFavouritesToLocalStorage
  );
  const favourites = useStore(store => store.favourites);

  let [isPlaying, setPlaying] = useState(false);
  let [songIndex, setSongIndex] = useState(0);
  let [progress, setProgress] = useState(0);
  let [currentTime, setCurrentTime] = useState(0);
  let [duration, setDuration] = useState(0.0);
  let [value, setValue] = useState(0);
  let [loop, setLoop] = useState(false);
  const audioLists = useStore(state => state.audioLists);
  let songsPlaying = audioLists;

  let audio;
  useEffect(() => {
    audio = document.getElementById("player");
    setValue(audio.volume);
    setSongIndex(0);
    setDuration(0.0);
    console.log(songsPlaying);
    console.log("songindex", songIndex);
  }, [audioLists]);

  const handlePlay = e => {
    audio = document.getElementById("player");
    audio.play();
    setPlaying(true);
  };

  const handlePause = e => {
    audio = document.getElementById("player");
    console.log("handle puase");
    audio.pause();
    setPlaying(false);
  };

  const handleNext = e => {
    audio = document.getElementById("player");
    audio.loop = false;
    setLoop(false);
    setPlaying(false);
    if (songIndex >= audioLists.length - 1) {
      songIndex = audioLists.length;
      setSongIndex(songIndex);
      console.log("if++", songIndex);
    } else {
      songIndex++;
      setSongIndex(songIndex);
      console.log("else++", songIndex);
    }
  };

  const handlePrev = e => {
    audio = document.getElementById("player");
    setLoop(false);
    audio.loog = false;
    setPlaying(false);
    if (songIndex < 1) {
      songIndex = 0;
      setSongIndex(songIndex);
      console.log("if--", songIndex);
    } else {
      songIndex--;
      setSongIndex(songIndex);
      console.log("esle--", songIndex);
    }
  };

  const handlePlaying = e => {
    console.log("playing");
    setPlaying(true);
  };

  const handlePausing = e => {
    console.log("pausing");
    setPlaying(false);
  };

  const handleEnded = e => {
    handleNext(e);
  };

  const handleTimeUpdate = e => {
    audio = document.getElementById("player");
    const progress = (audio.currentTime / audio.duration) * 100;
    setProgress(progress);
    setDuration(audio.duration ? audio.duration / 60 : 0);
    setCurrentTime(audio.currentTime / 60);
  };

  const handleVolume = e => {
    console.log(e.target.value);
  };

  const handleChangeValue = e => {
    audio = document.getElementById("player");
    audio.volume = e.target.value / 10;
    setValue(e.target.value);

    console.log(typeof value, " ", value);
  };

  const handleRepeat = e => {
    audio = document.getElementById("player");
    audio.loop = !loop;
    setLoop(audio.loop);
    console.log(audio.loop);
  };

  return (
    <div class="AudioPlayer">
      <div class="AudioPlayer-contents">
        {/* AudioPlayer-meta-data flex container start*/}
        <div class="AudioPlayer-meta-data">
          {/*image Audio palyer*/}
          <div class="AudioPlayer-image">
            {songsPlaying[songIndex] ? (
              <div
                class="Image"
                style={{
                  backgroundImage: `url("${songsPlaying[songIndex].img}")`
                }}
              />
            ) : (
              <div
                class="Image"
                style={{
                  backgroundImage:
                    "url('https://apkdl.in/apkimage/51MDy8ePKl1XLi8ZizQK28OqOwvfq8LmMPz9OyJA1zsVnrSH6AJZ-BGJPeFhDe1Yp7nl=rw')"
                }}
              />
            )}
          </div>
          <div class="AudioPlayer-text">
            <span className="AudioPlayer-song-title">
              {" "}
              {songsPlaying[songIndex]
                ? songsPlaying[songIndex].name
                : "song name"}{" "}
            </span>
            <br />
            <span className="AudioPlayer-song-author">
              {" "}
              {songsPlaying[songIndex]
                ? songsPlaying[songIndex].singer
                : "author name"}
            </span>
          </div>
          <div class="AudioPlayer-favourite">
            {songsPlaying[songIndex] &&
            checkFavouriteExists(songsPlaying[songIndex].id, favourites) ? (
              <i className="fas fa-heart fah" />
            ) : (
              <i
                class="far fa-heart fah"
                onClick={() => {
                  console.log("favoures", songsPlaying[songIndex]);
                  addFavouritesToLocalStorage([
                    {
                      id: songsPlaying[songIndex].id,
                      name: songsPlaying[songIndex].name,
                      singer: songsPlaying[songIndex].singer,
                      src: songsPlaying[songIndex].src,
                      img: songsPlaying[songIndex].img
                    }
                  ]);
                }}
              />
            )}
          </div>
          <div class="AudioPlayer-Player-actions">
            {/*AudioPlayer-Player-buttons flex*/}
            <audio
              id="player"
              autoPlay
              src={songsPlaying[songIndex] ? songsPlaying[songIndex].src : ""}
              onPlay={handlePlaying}
              onPause={handlePausing}
              onEnded={handleEnded}
              onTimeUpdate={handleTimeUpdate}
              onWaiting={handleWaiting}
              onError={handleError}
              onLoadStart={handleLoadStart}
              onStalled={handleStalled}
            />
            <div class="AudioPlayer-Player-buttons">
              {loop ? (
                <i class="fal fa-repeat-1-alt fan-1" onClick={handleRepeat} />
              ) : (
                <i class="fal fa-repeat-alt fan" onClick={handleRepeat} />
              )}
              <i class="fas fa-step-backward fan" onClick={handlePrev} />
              {isPlaying ? (
                <i class="fas fa-pause fap" onClick={handlePause} />
              ) : (
                <i class="fas fa-play fam" onClick={handlePlay} />
              )}
              <i class="fas fa-step-forward fan" onClick={handleNext} />
              <i class="fal fa-random fan" />
            </div>{" "}
            <div class="AudioPlayer-Player-content">
              <span class="AudioPlayer-time">{currentTime.toFixed(2)}</span>{" "}
              <div class="AudioPlayer-Player-progress">
                {" "}
                <div class="AudioPlayer-Player-Progress-container">
                  {" "}
                  <div class="Progress-back">
                    <div class="Progress" style={{ width: progress + "%" }} />{" "}
                  </div>{" "}
                </div>
                <div class="Progress-ball" style={{ left: progress + "%" }} />{" "}
              </div>
              <span class="AudioPlayer-time">{duration.toFixed(2)}</span>{" "}
            </div>
          </div>

          <div class="AudioPlayer-Player-radio">
            <Link to="/queue">
              <i class="fal fa-list-ul" />
            </Link>
          </div>

          <span class="fal fa-volume-up" />
          <div class="AudioPlayer-Player-volume">
            <div
              className="AudioPlayer-Audio-Progress"
              style={{ width: value * 10 + "%" }}
            >
              {" "}
              <input
                class="slider"
                type="range"
                min="0"
                step="0.2"
                max="10"
                value={value}
                onChange={handleChangeValue}
              />
            </div>
          </div>
        </div>
        {/* AudioPlayer-meta-data flex container ending*/}
      </div>
    </div>
  );
}

export default AudioPlayer;
