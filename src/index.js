import React from 'react'
import { render } from 'react-dom'
import Playlist from './playlist/components/playlist'
import data from './data/api.json'

console.log('HEEEllo world')
const containter = document.getElementById('app')
render( <Playlist data={data}/>, containter)