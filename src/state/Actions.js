import CELL_CLICKED from './Constants'

function cellClicked (cell) {
  return {
    type: CELL_CLICKED,
    payload: {
      cell
    }
  }
}

export { cellClicked }
