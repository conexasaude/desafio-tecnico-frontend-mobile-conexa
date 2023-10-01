import { AuthorizeHttpClientDecorator } from '~/main/decorators';
import { HttpRequest } from '~/data/protocols/http';
import { mockAccountModel } from '~/domain/test/mocks';
import { mockHttpRequest, GetSecureStorageSpy, HttpClientSpy } from '~/data/test/mocks';

import faker from 'faker';

type SutTypes = {
  sut: AuthorizeHttpClientDecorator;
  getSecureStorageSpy: GetSecureStorageSpy;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (): SutTypes => {
  const getSecureStorageSpy = new GetSecureStorageSpy();
  const httpClientSpy = new HttpClientSpy();
  const sut = new AuthorizeHttpClientDecorator(getSecureStorageSpy, httpClientSpy);
  return {
    sut,
    getSecureStorageSpy,
    httpClientSpy,
  };
};

describe('AuthorizeHttpGetClientDecorator', () => {
  test('Should call GetSecureStorage with correct value', async () => {
    const { sut, getSecureStorageSpy } = makeSut();

    await sut.request(mockHttpRequest());

    expect(getSecureStorageSpy.key).toBe('account');
  });

  test('Should not add headers if GetSecureStorage is invalid', async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      headers: {
        field: faker.random.words(),
      },
    };

    await sut.request(httpRequest);

    expect(httpClientSpy.url).toBe(httpRequest.url);
    expect(httpClientSpy.method).toBe(httpRequest.method);
    expect(httpClientSpy.headers).toEqual(httpRequest.headers);
  });

  test('Should add headers to HttpClient', async () => {
    const { sut, getSecureStorageSpy, httpClientSpy } = makeSut();
    getSecureStorageSpy.value = mockAccountModel();
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
    };

    await sut.request(httpRequest);

    expect(httpClientSpy.url).toBe(httpRequest.url);
    expect(httpClientSpy.method).toBe(httpRequest.method);
    expect(httpClientSpy.headers).toEqual({
      Authorization: `Bearer ${getSecureStorageSpy.value.token}`,
    });
  });

  test('Should merge headers to HttpClient', async () => {
    const { sut, getSecureStorageSpy, httpClientSpy } = makeSut();
    getSecureStorageSpy.value = mockAccountModel();
    const field = faker.random.words();
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      headers: {
        field,
      },
    };

    await sut.request(httpRequest);

    expect(httpClientSpy.url).toBe(httpRequest.url);
    expect(httpClientSpy.method).toBe(httpRequest.method);
    expect(httpClientSpy.headers).toEqual({
      field,
      Authorization: `Bearer ${getSecureStorageSpy.value.token}`,
    });
  });

  test('Should return the same result as HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut();

    const httpResponse = await sut.request(mockHttpRequest());

    expect(httpResponse).toEqual(httpClientSpy.response);
  });
});
