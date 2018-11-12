// import { indexOf, contains, not } from 'ramda'

export default function getPlayer (cell, moves = []) {
  const move = Math.floor(Math.random() * 9)
  const rad = Math.floor(Math.random() * 12)

  if (move < 0) {
    return undefined
  }

  // if (not(contains(cell, moves))) {
  //   moves.push(cell)
  // }
  console.log('statement', move, rad, move % 2)
  return move % rad === 0 ? '💣' : null
}
