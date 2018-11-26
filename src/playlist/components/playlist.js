import React from 'react';
import Media from './media'
import  './playlist.css'

function handleClcik(e) {
 console.log('props ' + props.handleOpenModal)
}
// No tiene ciclo de vida
function PlayList(props) { 
    
    return ( 
     <div className="Playlist" onClick={props.handleOpenModal} >
             { props.playList.map( (item) =>  
             <Media key={item.id}  
                    {...item}  
                    handleClick={props.handleOpenModal} 
                /> ) 
           }
     </div>
    )
}
export default PlayList;

