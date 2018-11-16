import React from 'react'
import { render } from 'react-dom'
import Media from './playlist/components/media'

console.log('HEEEllo world')
const containter = document.getElementById('app')
render( <Media id="medias"/>, containter)