import { HttpClient, HttpStatusCode } from '~/data/protocols/http';
import { UnexpectedError } from '~/domain/errors';
import { AppointmentModel } from '~/domain/models';
import { CreateAppointmentParam, CreateAppointment } from '~/domain/usecases';

export class RemoteCreateAppointment implements CreateAppointment {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AppointmentModel>,
  ) {}

  async execute(params: CreateAppointmentParam): Promise<AppointmentModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.created:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}
