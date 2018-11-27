import { connect } from 'react-redux'

import Cell from '../../Cell'
import { getMoves, cellClicked } from '../../state'
import { getPlayer, mineCount } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)
  const mines = mineCount(state)
  console.log('mineCount', mines)
  return {
    player: getPlayer(index, moves)
  }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(cellClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
