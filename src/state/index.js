import { cellClicked } from './actions'
import { CELL_CLICKED } from './constants'
import { initialState, rootReducer } from './reducer'
import configureStore from './store'
import { getMoves } from './selectors'

export {
  configureStore,
  initialState,
  getMoves,
  rootReducer,
  CELL_CLICKED,
  cellClicked
}
