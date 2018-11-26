import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../data/api.json'
//import data from '../../data/api.json'

const containter = document.getElementById('home-container')
const modal = document.getElementById('modal-container')
render( <Home data={data} />, containter)