import { CELL_CLICKED } from '..'

function cellClicked (cell) {
  return {
    type: CELL_CLICKED,
    payload: {
      cell
    }
  }
}

export { cellClicked }
