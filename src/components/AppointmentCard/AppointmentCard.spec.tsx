import { screen } from '@testing-library/react-native'
import { render } from "../../__mocks__/utils/customRender"
import AppointmentCard from './'

describe("Component: AppointmentCard", () => {
    let component;
    
    beforeEach(() => {
        component = render(<AppointmentCard
            id="99"
            onPress={() => {}} 
            pacient="Jonathan Joestar"
            date="2023-10-05 18:43"
        />);
    });

    it("should render appointment id", () => {
        const appointmentIdText = screen.queryByText("Consulta #99")
        expect(appointmentIdText).toBeTruthy()
    })

    it("should render pacient's name", () => {
        const pacientName = screen.queryByText("Jonathan Joestar")
        expect(pacientName).toBeTruthy()
    })
})