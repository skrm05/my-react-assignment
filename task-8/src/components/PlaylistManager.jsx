import { useState } from "react";

export default function PlaylistManager() {
  // Part D: Dynamic List Rendering [cite: 211]
  const [playlist, setPlaylist] = useState([
    { id: "song1", title: "Bohemian Rhapsody" },
    { id: "song2", title: "Stairway to Heaven" },
    { id: "song3", title: "Hotel California" },
  ]);
  const [newSong, setNewSong] = useState("");

  const addSong = () => {
    // Add songs to playlist [cite: 212]
    if (newSong) {
      setPlaylist([...playlist, { id: `song_${Date.now()}`, title: newSong }]);
      setNewSong("");
    }
  };

  const removeSong = (id) => {
    // Remove songs from playlist [cite: 213]
    setPlaylist(playlist.filter((song) => song.id !== id));
  };

  const moveUp = (index) => {
    // Reorder songs [cite: 214]
    if (index === 0) return;
    const newPlaylist = [...playlist];
    [newPlaylist[index - 1], newPlaylist[index]] = [
      newPlaylist[index],
      newPlaylist[index - 1],
    ];
    setPlaylist(newPlaylist);
  };

  return (
    <div className="section-card">
      <h2>Part D: Playlist Manager (Reordering)</h2>
      <p>
        <em>
          Notice how input states would behave unexpectedly if we used array
          index as keys during reordering. Unique IDs prevent this! [cite: 215]
        </em>
      </p>

      <div>
        <input
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          placeholder="Song name"
        />
        <button onClick={addSong}>Add Song</button>
      </div>

      <div style={{ marginTop: "15px" }}>
        {playlist.map((song, index) => (
          <div key={song.id} className="playlist-item">
            <span>{song.title}</span>
            <div>
              <button onClick={() => moveUp(index)}>↑ Move Up</button>
              <button onClick={() => removeSong(song.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
