import { HttpClient, HttpStatusCode } from '~/data/protocols/http';
import { UnexpectedError } from '~/domain/errors';
import { AppointmentModel } from '~/domain/models';
import { GetAppointments } from '~/domain/usecases';

export class RemoteGetAppointments implements GetAppointments {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<{ data: AppointmentModel[] }>,
  ) {}

  async execute(): Promise<{ data: AppointmentModel[] }> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}
