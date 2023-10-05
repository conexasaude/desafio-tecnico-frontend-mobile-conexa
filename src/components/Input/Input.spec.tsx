import { fireEvent, render, screen } from '@testing-library/react-native'

import Input from './'

describe("Component: Input", () => {
    const setValue = jest.fn()
    const InputComponent = <Input
        label="Label"
        onChangeText={setValue}
        value=""
        placeholder="Example"
    />

    it("should render label", () => {
        render(InputComponent)
        const labelText = screen.queryByText("Label")
        expect(labelText).toBeTruthy()
    })

    it("should render placeholder", () => {
        render(InputComponent)
        const placeholderText = screen.queryByPlaceholderText("Example")
        expect(placeholderText).toBeTruthy()
    })

    it("should change value", () => {
        render(InputComponent)
        const input = screen.getByPlaceholderText("Example")
        fireEvent.changeText(input, 'New value');
        expect(setValue).toHaveBeenCalledWith('New value')
    })
})