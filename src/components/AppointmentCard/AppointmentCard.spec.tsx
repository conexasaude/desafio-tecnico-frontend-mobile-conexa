import { render, screen } from '@testing-library/react-native'

import AppointmentCard from './'

describe("Component: AppointmentCard", () => {
    const AppointmentCardComponent = <AppointmentCard
        id="99"
        onPress={() => {}} 
        pacient="Jonathan Joestar"
        date="2023-10-05 18:43"
    />

    it("should render appointment id", () => {
        render(AppointmentCardComponent)

        const appointmentIdText = screen.queryByText("Consulta #99")
        expect(appointmentIdText).toBeTruthy()
    })

    it("should render pacient's name", () => {
        render(AppointmentCardComponent)

        const pacientName = screen.queryByText("Jonathan Joestar")
        expect(pacientName).toBeTruthy()
    })
})