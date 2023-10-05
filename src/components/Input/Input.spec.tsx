import { fireEvent, render, screen } from '@testing-library/react-native'

import Input from './'

describe("Component: Input", () => {
    let component;
    const setValue = jest.fn()
    
    beforeEach(() => {
        component = render(<Input
            label="Label"
            onChangeText={setValue}
            value=""
            placeholder="Example"
        />);
    });
    
    it("should render label", () => {
        const labelText = screen.queryByText("Label")
        expect(labelText).toBeTruthy()
    })

    it("should render placeholder", () => {
        const placeholderText = screen.queryByPlaceholderText("Example")
        expect(placeholderText).toBeTruthy()
    })

    it("should change value", () => {
        const input = screen.getByPlaceholderText("Example")
        fireEvent.changeText(input, 'New value');
        expect(setValue).toHaveBeenCalledWith('New value')
    })
})