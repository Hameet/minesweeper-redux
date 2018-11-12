import { indexOf } from 'ramda'

export default function getPlayer (cell, moves = []) {
  const move = indexOf(cell, moves)

  if (move < 0) {
    return undefined
  }

  return move % 2 === 0 ? 'x' : 'o'
}
