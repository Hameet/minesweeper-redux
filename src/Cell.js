import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCell = styled.div`
color: ${({ mines }) => (mines === 'x' ? 'hsla(6, 59%, 50%, 1)' : 'hsla(6, 59%, 50%, 1)')};
border-style: solid;
  font-size: 2rem;
  width: 15vh;
  height: 15vh;
  border: 1px #ccc dotted;
  border-radius: 10%;
//   background-color: white;
  margin-top: 1px
  margin-left: 2px;
  margin-right: 2px;
  line-height: 10vh;
  text-align: center;
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
