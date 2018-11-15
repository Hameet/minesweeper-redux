import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Cell } from './containers'

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

export function App () {
  return (
    <StyledApp>
      <Board>
        {times(cell => <Cell key={cell} index={cell} />, 30)}
      </Board>
    </StyledApp>
  )
}
