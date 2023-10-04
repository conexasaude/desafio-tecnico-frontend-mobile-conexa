export interface AppointmentButtonCardInterface {
  patient: string;
  date: string;
  time: string;
  observation: string;
  onPress(): void;
}
