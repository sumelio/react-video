import React from 'react';
import Media from './media'
import  './playlist.css'
import Control from '../../icons/components/Control'

function handleClcik(e) {
 console.log(e)
}
// No tiene ciclo de vida
function PlayList(props) { 
    const {Play, Volume, Pause, FullScreen} = Control
    return ( 
     <div className="Playlist" onClick={handleClcik}>
             { props.playList.map( (item) =>  <Media key={item.id} {...item} /> ) }
     </div>
    )
}

export default PlayList;

