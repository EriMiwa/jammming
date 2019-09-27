import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class PlayList extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    }

    render () {
        return(
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
                <TrackList tracks={this.props.playlistTracks}
                           onMove={this.props.onMove}
                           isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default PlayList;