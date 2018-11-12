import React, { Component } from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledCell = styled.div`
color: ${({ mines }) => (mines === 'x' ? 'hsla(6, 59%, 50%, 1)' : 'hsla(6, 59%, 50%, 1)')};
border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
    cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')}
border-style: solid;
  font-size: 2rem;
  width: 13vh;
  height: 13vh;
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

export default function Cell ({ handleClick, index, player }) {
  return (
    <StyledCell index={index} player={player} onClick={handleClick}>
      {player}
    </StyledCell>
  )
}

// class Cell extends React.Component {
//   getValue () {
//     const { value } = this.props

//     if (!value.isRevealed) {
//       return this.props.value.isFlagged ? '🚩' : null
//     }
//     if (value.isMine) {
//       return '💣'
//     }
//     if (value.neighbour === 0) {
//       return null
//     }
//     return value.neighbour
//   }
//   render () {
//     const { value, onClick, cMenu } = this.props
//     return (
//       <div onClick={this.props.onClick} onContextMenu={this.props.cMenu}>
//         {this.getValue()}
//       </div>
//     )
//   }
// }

// // Type checking With PropTypes
// const cellItemShape = {
//   isRevealed: PropTypes.bool,
//   isMine: PropTypes.bool,
//   isFlagged: PropTypes.bool
// }
// Cell.propTypes = {
//   value: PropTypes.objectOf(PropTypes.shape(cellItemShape)),
//   onClick: PropTypes.func,
//   cMenu: PropTypes.func
// }
