/* eslint-disable */
import { DELETEPERMISSION, PERMISSION } from '../action/permission'
const initialState = {
  permissions: [],
}
const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERMISSION:
      return {
        permissions: action.payload.permission,
      }
    case DELETEPERMISSION:
      let newpermissionList = [...state.permissions]
      const result = newpermissionList.filter((elem) => {
        return elem.id != action.payload.id
      })

      return {
        ...state,
        permissions: result,
      }
    default:
      return state
  }
}

export default permissionReducer
