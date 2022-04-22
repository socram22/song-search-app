import React from "react";
import "./SongLyric.css";

const SongLyric = ({ title, lyrics }) => {
  return (
    <div className="song-lyric">
      <h2>{title}</h2>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </div>
  );
};

export default SongLyric;
