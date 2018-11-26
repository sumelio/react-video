import React from 'react'
import './play-pause.css'

import Control from '../../icons/components/Control'

const {Play, Volume, Pause, FullScreen} = Control


const PlayPause = (props) => (
 <div className="PlayPause" >
   {
       props.pause ?
       <button
       onClick={props.handleClick}
   ><Pause size={25} color="white"/></button>
    :
    <button
    onClick={props.handleClick}
   ><Play size={25} color="white"/></button>
   }
   
   
 </div>
) 

export default PlayPause