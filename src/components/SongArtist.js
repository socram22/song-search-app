import React from "react";
import "./SongArtist.css";

const SongArtist = ({ artist }) => {
  return (
    <div className="song-artist-data">
      <h2>{artist.strArtist}</h2>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Present"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Official Website
      </a>
      <p>{artist.strBiographyEN}</p>
    </div>
  );
};

export default SongArtist;
