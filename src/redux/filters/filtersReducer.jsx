import { CHANGE_STATUS } from './actionsType'
import { initialState } from './initialState'

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      }

    default:
      return state
  }
}

export default filtersReducer
