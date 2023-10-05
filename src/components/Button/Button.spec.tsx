import { render, screen } from '@testing-library/react-native'

import Button from './'

describe("Component: Button", () => {
    const ButtonComponent = <Button label='Botão' onPress={jest.fn(() => Promise.resolve())} />

    it("should render button label", () => {
        render(ButtonComponent)

        const buttonLabel = screen.queryByText("Botão")
        expect(buttonLabel).toBeTruthy()
    })
})