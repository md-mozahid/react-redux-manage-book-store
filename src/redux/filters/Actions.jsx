import { CHANGE_STATUS } from './actionsType'

export const changeStatus = (status) => {
  return {
    type: CHANGE_STATUS,
    payload: status,
  }
}
