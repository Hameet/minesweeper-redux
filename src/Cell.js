import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCell = styled.div`
color: ${({ mines }) => (mines === 'x' ? 'hsla(6, 59%, 50%, 1)' : 'hsla(6, 59%, 50%, 1)')};
border-style: solid;
  font-size: 2rem;
  width: 75px;
  height: 75px;
  border: 1px #ccc dotted;
  border-radius: 10%;
  background-color: white;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;`

export default function Cell (props) {
  return (
    <StyledCell index={props.index} mines={props.mines}>
      {props.mines}
    </StyledCell>
  )
}