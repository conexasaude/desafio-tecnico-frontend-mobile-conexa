import { UserDTO } from '@models/UserDTO'

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGOUT,
} from '../actions/auth.actions'
import { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  user?: UserDTO
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: undefined,
}

export const authReducer = (
  state = initialState,
  action: PayloadAction<UserDTO>,
): AuthState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: undefined,
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
      }
    default:
      return state
  }
}
