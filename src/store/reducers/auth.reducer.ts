import { UserDTO } from '@models/UserDTO'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/auth.actions'
import { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  user: UserDTO | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: null,
}

const authReducer = (
  state = initialState,
  action: PayloadAction<UserDTO>,
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      }

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }

    default:
      return state
  }
}

export default authReducer
