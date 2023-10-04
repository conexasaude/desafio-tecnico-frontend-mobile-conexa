import { makeApiUrl } from '~/main/factories/http';
import { RemoteGetAppointmentsById } from '~/data/usecases';
import { GetAppointmentsById } from '~/domain/usecases';
import { makeAuthorizeHttpClientDecorator } from '~/main/factories/decorators';

export const makeRemoteGetAppointmentsById = (id: number): GetAppointmentsById =>
  new RemoteGetAppointmentsById(makeApiUrl(`/consulta/${id}`), makeAuthorizeHttpClientDecorator());
