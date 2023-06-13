import { SEARCH_BOOK } from './actionsType'
import { initialState } from './initialState'

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state
  }
}

export default filtersReducer
