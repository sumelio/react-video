import React, { Component } from 'react';
import { render } from 'react-dom'
import Media from './media'
import  './playlist.css'

class PlayuList extends Component {
    
    render() {
        
        const playList = this.props.data.categories[0].playlist
        
        return (
         <div className="Playlist">
             {
                 playList.map( (item) => {
                    console.log(item);
                    return <Media key={item.id} {...item} /> 
                 }
                )
             }
           
         </div>
         )
    }
}

export default PlayuList;
