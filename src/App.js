import React, { Component } from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import './App.css'

import Cell from './Cell'

const makeCells = () =>
  times(
    idx => <Cell key={idx} index={idx} mines={idx % 2 === 0 ? 'X' : '0'} />,
    9
  )

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

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`

class App extends Component {
  render () {
    return (
      <StyledApp>
        <Board>
          {makeCells()}

        </Board>
      </StyledApp>
    )
  }
}

export default App
