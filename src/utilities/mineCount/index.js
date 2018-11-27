// import { identity, map, times } from 'ramda'
import { contains, length, not } from 'ramda'

import { getPlayer } from '..'

export default function mineCount (mines = []) {
  const cell = Math.floor(Math.random() * 30)

  if (length(mines) === 10) {
    return mines
  }

  if (not(contains(cell, mines))) {
    return cell
  }

  return mineCount(mines)
}
