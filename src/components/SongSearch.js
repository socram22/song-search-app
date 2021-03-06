import React, { useEffect, useState } from "react";
import { helpHttp } from "./helpHttp";
import Loading from "./Loading";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      const artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Song Search</h1>
      <SongForm handleSearch={handleSearch} />
      {loading && <Loading />}
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
