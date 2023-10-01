import { makeApiUrl } from '~/main/factories/http';
import { RemoteCreateAppointment } from '~/data/usecases';
import { CreateAppointment } from '~/domain/usecases';
import { makeAuthorizeHttpClientDecorator } from '~/main/factories/decorators';

export const makeRemoteCreateAppointment = (): CreateAppointment =>
  new RemoteCreateAppointment(makeApiUrl('/consulta'), makeAuthorizeHttpClientDecorator());
