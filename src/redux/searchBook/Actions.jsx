import { SEARCH_BOOK } from './actionsType'

export const searchBookName = (searchName) => {
  return {
    type: SEARCH_BOOK,
    payload: searchName,
  }
}
