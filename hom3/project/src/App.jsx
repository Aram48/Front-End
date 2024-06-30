import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SongList } from './SongList'
import { Playlist } from './Playlist'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Varel em momery", artist: "Hayko" },
    { id: 102, title: "Arajiny Aramn er", artist: "Artash" },
    { id: 103, title: "Verev", artist: "Hayko" },
    { id: 104, title: "Amena", artist: "Hayko" },
  ]);

  const [playlist, setPlaylist] = useState([]);

  const removeSong = id => {
    setSongs(songs.filter(song => song.id !== id));
  }

  const addToPlaylist = id => {
    const song = songs.find(song => song.id === id);
    if (song && !playlist.some(s => s.id === id)) {
      setPlaylist([...playlist, song]);
    }
  }

  const moveDownInPlaylist = index => {
    if (index < playlist.length - 1) {
      const newPlaylist = [...playlist];
      [newPlaylist[index], newPlaylist[index + 1]] = [newPlaylist[index + 1], newPlaylist[index]];
      setPlaylist(newPlaylist);
    }
  };

  return <>
    <SongList
      items={songs}
      onDelete={removeSong}
      addToPlaylist={addToPlaylist}
    />
    <Playlist
      items={playlist}
      moveDownInPlaylist={moveDownInPlaylist}

    />
  </>
}

export default App