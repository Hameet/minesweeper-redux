import { indexOf } from 'ramda'

export default function getPlayer (cell, mines = []) {
  const move = indexOf(cell, mines)

  if (move < 0) {
    return undefined
  }

  return move % 2 === 0 ? 'x' : 'o'
}
