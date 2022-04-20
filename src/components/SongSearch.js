import React, { useState } from "react";
import Loading from "./Loading";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Song Search</h1>
      {loading && <Loading />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
