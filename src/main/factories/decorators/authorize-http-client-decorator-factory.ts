import { AuthorizeHttpClientDecorator } from '~/main/decorators';
import { makeLocalSecureStorageAdapter } from '~/main/factories/cache';
import { makeAxiosHttpClient } from '~/main/factories/http';
import { HttpClient } from '~/data/protocols/http';

export const makeAuthorizeHttpClientDecorator = (): HttpClient =>
  new AuthorizeHttpClientDecorator(makeLocalSecureStorageAdapter(), makeAxiosHttpClient());
