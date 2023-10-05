import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'

import Select from './'

describe("Component: Select", () => {
    const mockSetValue = jest.fn();
    let component;

    beforeEach(() => {
        component = render(<Select
            label="Label"
            value=""
            setValue={mockSetValue}
            items={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' },
            ]}
        />);
    });

    it("should render label", () => {
        const labelText = screen.queryByText("Label")
        expect(labelText).toBeTruthy()
    })

    it("should render placeholder", () => {
        const placeholderText = screen.queryByText("Selecione um paciente")
        expect(placeholderText).toBeTruthy()
    })
})