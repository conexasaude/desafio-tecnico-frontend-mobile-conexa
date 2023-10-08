import { screen } from '@testing-library/react-native'
import { render } from "../../__mocks__/utils/customRender"
import Modal from './'

describe("Component: Modal", () => {
    it("should be visible", () => {
        render(<Modal
            isVisible={true}
            changeVisibility={jest.fn()}
            backHome={jest.fn()}
            resetForm={jest.fn()}
        />)

        const modalTitle = screen.queryByText("Consulta cadastrada!")
        
        expect(modalTitle).toBeTruthy()
    })

    it("should not be visible", () => {
        render(<Modal
            isVisible={false}
            changeVisibility={jest.fn()}
            backHome={jest.fn()}
            resetForm={jest.fn()}
        />)

        const modalTitle = screen.queryByText("Consulta cadastrada!")
        
        expect(modalTitle).toBeFalsy()
    })
})