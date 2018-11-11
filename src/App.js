import React, { Component } from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import './App.css'

import Cell from './Cell'
import getPlayer from './utilities'

// import initialState from './state/Constants'

const mines = []

const makeCells = mines => {
  return times(square => {
    const player = getPlayer(cell, mines)

    return isUndefined(player)
      ? <Cell
        key={cell}
        index={cell}
        handleClick={() => console.log(`Cell ${cell}`)}
        />
      : <Cell key={cell} index={cell} player={player} />
  }, 30)
}

const Board = styled.div`
align-self: center;
display: grid;
grid-area: board;
grid-gap: 0;
grid-template-areas: 'zero one two' 'three four five' 'six seven eight';
grid-template-columns: 13vh 13vh 13vh 13vh 13vh 13vh;
grid-template-rows: 13vh 13vh 13vh 13vh 13vh 13vh;
height: 65vh;
justify-self: center;
margin: 100px;
width: 78vh;
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
          {makeCells(mines)}

        </Board>
      </StyledApp>
    )
  }
}

export default App
