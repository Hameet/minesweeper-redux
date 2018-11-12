import { indexOf, contains, not } from 'ramda'

export default function getPlayer (cell, moves = []) {
  const move = Math.floor(Math.random() * 9)

  if (move < 0) {
    return undefined
  }

  if (not(contains(cell, moves))) {
    moves.push(cell)
  }

  return move % 2 === 0 ? '💣' : null
}
