import { EDITED_BOOK } from './actionsType'
import { initialState } from './initialState'

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITED_BOOK:
      return (state = action.payload)

    default:
      return state
  }
}

export default editReducer
