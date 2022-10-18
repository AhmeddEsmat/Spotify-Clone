import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import SkipNextIcon from "@material-ui/icons/SkipNext";
// import ShuffleIcon from "@material-ui/icons/Shuffle";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
// import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import { Grid, Slider } from "@material-ui/core";
import SpotifyPlayer from "react-spotify-web-playback";

const Footer = ({ spotify }) => {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      {/* <div className="footer-left">
        <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className="footer-albumLogo"
        />
        {item ? (
          <div className="footer-songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer-songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" onClick={skipNext} />
        {playing ? (
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer-icon"
            onClick={handlePlayPause}
          />
        ) : (
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer-icon"
            onClick={handlePlayPause}
          />
        )}
        <SkipNextIcon className="footer-icon" onClick={skipPrevious} />
        <RepeatIcon className="footer-green" />
      </div> */}

      <SpotifyPlayer
        className="player"
        token={token}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying)
            dispatch({ type: "SET_PLAYING", playing: false });
        }}
        play={playing}
        uris={"spotify:playlist:37i9dQZEVXcN57o8Z4p6QG"}
      />

      {/* <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
};

export default Footer;
