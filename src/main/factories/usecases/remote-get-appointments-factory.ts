import { makeApiUrl } from '~/main/factories/http';
import { RemoteGetAppointments } from '~/data/usecases';
import { GetAppointments } from '~/domain/usecases';
import { makeAuthorizeHttpClientDecorator } from '~/main/factories/decorators';

export const makeRemoteGetAppointments = (): GetAppointments =>
  new RemoteGetAppointments(makeApiUrl('/consultas'), makeAuthorizeHttpClientDecorator());
