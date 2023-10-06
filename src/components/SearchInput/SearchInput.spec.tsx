import { act, fireEvent, screen } from '@testing-library/react-native'
import { render } from "../../__mocks__/utils/customRender"
import SearchInput from './'

describe("Component: SearchInput", () => {
    let component;
    const setValue = jest.fn()
    
    beforeEach(() => {
        component = render(<SearchInput onChangeText={setValue}/>);
    });
    
    it("should render placeholder", () => {
        const placeholderText = screen.queryByPlaceholderText("Nome do paciente ou # da consulta")
        expect(placeholderText).toBeTruthy()
    })

    it("should change value", () => {
        const input = screen.getByPlaceholderText("Nome do paciente ou # da consulta")

        act(() => {
            fireEvent.changeText(input, 'Search value');
        })
        
        expect(setValue).toHaveBeenCalledWith('Search value')
    })
})