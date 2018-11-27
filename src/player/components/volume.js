import React from 'react'
import Control from '../../icons/components/Control'
import './volume.css'

const { VolumeIcon } = Control
const Volume = props => (
 <button
  className="Volume"
 >
     <VolumeIcon 
     color="white"
     size={25}
     />
     <div className='Volume-range' >
       <input 
       type="range" 
       min={0}
       max={1}
       step={.05}
       onChange={props.handleVolumeChange}
       />
     </div>
 </button>
)

export default Volume