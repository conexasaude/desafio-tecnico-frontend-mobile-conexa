import { HttpClient, HttpStatusCode } from '~/data/protocols/http';
import { AccessDeniedError, UnexpectedError } from '~/domain/errors';
import { AppointmentModel } from '~/domain/models';
import { GetAppointmentsById } from '~/domain/usecases';

export class RemoteGetAppointmentsById implements GetAppointmentsById {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<{ data: AppointmentModel }>,
  ) {}

  async execute(): Promise<{ data: AppointmentModel }> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}
