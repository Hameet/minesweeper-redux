// import { indexOf, contains, not } from 'ramda'

// export default function getPlayer (cell, moves = []) {
//   const move = Math.floor(Math.random() * 9)
//   const rad = Math.floor(Math.random() * 12)
//   const click = indexOf(cell, moves)

//   if (click < 0) {
//     return undefined
//   }

//   // if (not(contains(cell, moves))) {
//   //   moves.push(cell)
//   // }
//   console.log('click', click)
//   return click % rad === 0 ? '💣' : null
// }

import { indexOf } from 'ramda'

export default function getPlayer (cell, moves = []) {
  const move = indexOf(cell, moves)
  const mine = Math.floor(Math.random() * 9)
  const rad = Math.floor(Math.random() * 12)
  const value = mine % rad

  if (move < 0) {
    return undefined
  }
  console.log('move', move, 'move % 2', move % 2)
  return move % 2 === 0 ? '💣' : null
}
