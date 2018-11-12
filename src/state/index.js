import { cellClicked } from './actions'
import { CELL_CLICKED } from './constants'
import { initialState, rootReducer } from './reducer'
import configureStore from './store'

export { configureStore, initialState, rootReducer, CELL_CLICKED, cellClicked }
