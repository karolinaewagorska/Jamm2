import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
       {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
       {name: 'name3', artist: 'artist3', album: 'album3', id: 3} ],
      playlistName: 'Best PlayList for party',
      playlistTracks: [{name: 'Britney Spears', artist: 'Ups I did it again', album: 'Baby', id: 4}, 
                        {name: 'Waka Waka', artist: 'Shakira', album: 'Africa', id: 4}, 
                        {name: 'Jenny from the blocks', artist: 'Jennifer Lopex', album: 'Latino', id: 6}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
       
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                        onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} 
           playlistTracks={this.state.playlistTracks}
           onRemove={this.removeTrack}/>
        </div>
      </div>
    </div>
  );
 }
}

export default App;

