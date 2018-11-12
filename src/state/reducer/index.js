import { isUndefined } from 'ramda-adjunct'

import { CELL_CLICKED } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case CELL_CLICKED:
      return {
        ...state,
        moves: isUndefined(payload.cell)
          ? state.moves
          : [...state.moves, payload.square]
      }
    default:
      return state
  }
}

export { initialState, rootReducer }
