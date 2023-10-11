// Schema
import { SignInFormValues } from '@schemas/userSchema'

// Http client
import { httpClient } from '@http-client'

// Redux
import { Dispatch } from 'redux'

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const logout = () => ({ type: LOGOUT })

export const signIn =
  ({ email, password }: SignInFormValues) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: SIGN_IN_REQUEST })

    try {
      const { data } = await httpClient.post('/api/login', {
        email,
        senha: password,
      })

      dispatch({ type: SIGN_IN_SUCCESS, payload: data.data })
    } catch (error) {
      dispatch({ type: SIGN_IN_FAILURE })
    }
  }
