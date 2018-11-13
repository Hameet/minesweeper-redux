import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledCell = styled.div`
color: ${({ mines }) => (mines === 'xx' ? 'hsla(6, 59%, 50%, 1)' : 'hsla(6, 59%, 50%, 1)')};
border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '4px' : 0)} 0;
    cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')}
border-style: solid;
  font-size: 2rem;
  width: 13vh;
  height: 13vh;
  border: 1px #ccc dotted;
  border-radius: 10%;
  margin-top: 1px
  margin-left: 2px;
  margin-right: 2px;
  line-height: 10vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;`

export default function Cell ({ handleClick, index, player }) {
  console.log('handleclick', player)
  return isUndefined(player)
    ? <StyledCell index={index} onClick={handleClick} />
    : <StyledCell index={index} player={player}> {player}</StyledCell>
}
