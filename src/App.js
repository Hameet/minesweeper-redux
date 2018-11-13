import React, { Component } from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'
import { connect } from 'react-redux'

import { getMoves, cellClicked } from './state'
import Cell from './Cell'
import getPlayer from './utilities'

function makeCells (markCell, moves = []) {
  return times(cell => {
    const player = getPlayer(cell, moves)

    return isUndefined(player)
      ? <Cell key={cell} index={cell} handleClick={() => markCell(cell)} />
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

export function App ({ moves, markCell }) {
  return (
    <StyledApp>
      <Board>
        {makeCells(moves, markCell)}
      </Board>
    </StyledApp>
  )
}

function mapStateToProps (state) {
  return {
    moves: getMoves(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    markCell: cell => dispatch(cellClicked(cell))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
