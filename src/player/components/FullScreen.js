import React from 'react'
import Control from '../../icons/components/Control'
import './full-screen.css'

const { FullScreenIcon } = Control
const FullScreen = (props) => (
 <div className="FullScreen"
    onClick={props.handleFullScreenClick}
 >
  <FullScreenIcon 
    size={25}
    color="white"
  />
 </div>
)

export default FullScreen