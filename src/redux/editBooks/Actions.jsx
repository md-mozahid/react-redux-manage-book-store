import { EDITED_BOOK } from './actionsType'

export const editedBook = (updatedData) => {
  return {
    type: EDITED_BOOK,
    payload: updatedData,
  }
}
