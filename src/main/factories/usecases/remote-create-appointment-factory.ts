import { makeApiUrl, makeAxiosHttpClient } from '~/main/factories/http';
import { RemoteCreateAppointment } from '~/data/usecases';
import { CreateAppointment } from '~/domain/usecases';

export const makeRemoteCreateAppointment = (): CreateAppointment =>
  new RemoteCreateAppointment(makeApiUrl('/consulta'), makeAxiosHttpClient());
