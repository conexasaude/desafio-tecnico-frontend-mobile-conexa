import { render, screen } from '@testing-library/react-native'

import Button from './'

describe("Component: Button", () => {
    it("should render button label", () => {
        render(<Button label='Botão' onPress={jest.fn(() => Promise.resolve())} />)

        const buttonLabel = screen.queryByText("Botão")
        expect(buttonLabel).toBeTruthy()
    })
})