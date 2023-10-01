import { HttpClient, HttpRequest, HttpResponse } from '~/data/protocols/http';
import { GetSecureStorage } from '~/data/protocols/cache';

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getSecureStorage: GetSecureStorage,
    private readonly httpClient: HttpClient,
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const account: string = await this.getSecureStorage.get('account');

    if (account) {
      const parseAccount = JSON.parse(account);
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${parseAccount.token}`,
        }),
      });
    }
    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}
