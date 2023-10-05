import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native'

import { UserProvider } from '../../contexts/UserContext';
import Home from './'

jest.mock('@react-navigation/native')
jest.mock('../../hooks/useUser', () => ({
    useUser: jest.fn(() => ({
        user: { nome: "Username" },
        getAuthUser: jest.fn(),
        logout: jest.fn
    }))
}))

describe("Screen: Home", () => {
    const createTestProps = (props: Object) => ({
        navigation: {
          navigate: jest.fn()
        },
        ...props
    });
    const props: any = createTestProps({});

    beforeEach(() => {
        render(
            <UserProvider>
                <Home {...props} />
            </UserProvider>
        ); 
    })

    it("should navigate to AppointmentList", async () => {
        const listButton = screen.getByTestId("appointment-card-list")
        fireEvent.press(listButton)

        await waitFor(() =>{
            act(() => {
                fireEvent.press(listButton)
            })
        })
        
        expect(props.navigation.navigate).toHaveBeenCalledWith('AppointmentList')
    })

    it("should navigate to NewAppointment", async () => {
        const newAppointmentButton = screen.getByTestId("new-appointment")
        fireEvent.press(newAppointmentButton)

        await waitFor(() =>{
            act(() => {
                fireEvent.press(newAppointmentButton)
            })
        })
        
        expect(props.navigation.navigate).toHaveBeenCalledWith('NewAppointment')
    })
})