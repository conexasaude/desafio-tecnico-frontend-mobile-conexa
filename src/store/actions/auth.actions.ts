import { httpClient } from '@http-client'
import { SignInFormValues } from '@schemas/userSchema'
import { Dispatch } from 'redux'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const logout = () => ({ type: LOGOUT })

export const signIn =
  ({ email, password }: SignInFormValues) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
      const { data } = await httpClient.post('/api/login', {
        email,
        senha: password,
      })

      dispatch({ type: LOGIN_SUCCESS, payload: data.data })
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE })
    }
  }
