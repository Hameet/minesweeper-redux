import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'

import Cell from './Cell'

const Board = styled.div`
align-self: center;
display: grid;
grid-area: board;
grid-gap: 0;
grid-template-areas: 'zero one two' 'three four five' 'six seven eight';
grid-template-columns: 20vh 20vh 20vh;
grid-template-rows: 20vh 20vh 20vh;
height: 60vh;
justify-self: center;
margin: auto;
width: 60vh;
color: black;
border-style: dotted;
`

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Board>
          <Cell />
          Hey
        </Board>
      </div>
    )
  }
}

export default App
