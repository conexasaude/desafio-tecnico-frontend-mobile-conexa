import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native'

import { UserProvider } from '../../contexts/UserContext';
import Login from './'

jest.mock('@react-navigation/native')

jest.mock('../../services/auth', () => ({
    auth: async (email: string, password: string) => ({
        nome: 'Username',
        token: 'Token',
    })
}))

describe("Screen: Login", () => {
    const createTestProps = (props: Object) => ({
        navigation: {
          navigate: jest.fn()
        },
        ...props
    });
    const props: any = createTestProps({});

    it("should login user", async () => {
        render(
            <UserProvider>
                <Login {...props} />
            </UserProvider>
        ); 

        const emailInput = screen.getByPlaceholderText("exemplo@conexa.com")
        fireEvent.changeText(emailInput, "email@example.com")

        const passwordInput = screen.getByPlaceholderText("Senha")
        fireEvent.changeText(passwordInput, "password")

        const loginButton = screen.getByTestId("login-button")
        await waitFor(() =>{
            act(() => {
                fireEvent.press(loginButton)
            })
        })
        
        expect(props.navigation.navigate).toHaveBeenCalledWith('Home')
    })
})