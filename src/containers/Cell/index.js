import { connect } from 'react-redux'

import Cell from '../../Cell'
import { getMoves, cellClicked } from '../../state'
import getPlayer from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)

  return {
    player: getPlayer(index, moves)
  }
}

function mapDispatchToProps (dispatch, { index }) {
  console.log('handleclick', dispatch)
  return {
    handleClick: () => dispatch(cellClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
