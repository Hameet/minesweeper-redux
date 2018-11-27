import { identity, map, times } from 'ramda'

import { getPlayer } from '..'

export default function mineCount (moves) {
  return map(cell => getPlayer(cell, moves), times(identity, 30))
}
