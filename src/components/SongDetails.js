import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import "./SongDetails.css";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <div className="grid-1-2">
      {lyric.error ||
      lyric.err ||
      lyric.name === "AbortError" ||
      !lyric.lyrics ? (
        <h2 style={{ textAlign: "center", color: "red" }}>Song Not Found!</h2>
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <h2 style={{ textAlign: "center", color: "red" }}>Artist Not Found!</h2>
      )}
    </div>
  );
};

export default SongDetails;
