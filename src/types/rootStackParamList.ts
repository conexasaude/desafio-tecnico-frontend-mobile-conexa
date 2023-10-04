import { Appointment } from "./appointment";

type RootStackParamList = {
	Login: undefined;
	Home: undefined;
	AppointmentList: undefined;
	AppointmentDetails: { appointment: Appointment };
	NewAppointment: undefined;
};

export default RootStackParamList