import { fireEvent, render, screen } from '@testing-library/react-native'

import PasswordInput from './'

describe("Component: PasswordInput", () => {
    let component;
    
    beforeEach(() => {
        component = render(<PasswordInput
            onChangeText={jest.fn()}
            value="Password"
            placeholder="Example"
        />);
    });

    it("should render label", () => {
        const labelText = screen.queryByText("Senha")
        expect(labelText).toBeTruthy()
    })

    it("should render placeholder", () => {
        const placeholderText = screen.queryByPlaceholderText("Example")
        expect(placeholderText).toBeTruthy()
    })

    it("should show password value", () => {
        const showPasswordButton = screen.queryByTestId("show-password-button")
        const input = screen.queryByTestId("password-custom-input")

        fireEvent.press(showPasswordButton)
        expect(input.props.secureTextEntry).toBe(false)
    })

    it("should not show password value", () => {
        const input = screen.queryByTestId("password-custom-input")

        expect(input.props.secureTextEntry).toBe(true)
    })
})