import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = () => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongLyric />
      <SongArtist />
    </div>
  );
};

export default SongDetails;
