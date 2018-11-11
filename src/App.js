import React, { Component } from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import './App.css'

import Cell from './Cell'

const makeCells = () =>
  times(
    idx => <Cell key={idx} index={idx} mines={idx % 2 === 0 ? 'X' : '0'} />,
    30
  )

const Board = styled.div`
align-self: center;
display: grid;
grid-area: board;
grid-gap: 0;
grid-template-areas: 'zero one two' 'three four five' 'six seven eight';
grid-template-columns: 15vh 15vh 15vh 15vh 15vh 15vh;
grid-template-rows: 15vh 15vh 15vh 15vh 15vh 15vh;
height: 75vh;
justify-self: center;
margin: auto;
width: 90vh;
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
