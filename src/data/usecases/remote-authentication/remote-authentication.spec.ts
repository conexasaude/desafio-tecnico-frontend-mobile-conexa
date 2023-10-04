import { RemoteAuthentication } from '~/data/usecases';
import { HttpStatusCode } from '~/data/protocols/http';
import { InvalidCredentialsError, UnexpectedError } from '~/domain/errors';
import { mockAuthenticationParams, mockAccountModel } from '~/domain/test/mocks';
import { HttpClientSpy } from '~/data/test/mocks';

import faker from 'faker';
import { AccountModel } from '~/domain/models';

type SutTypes = {
  sut: RemoteAuthentication;
  httpClientSpy: HttpClientSpy<AccountModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<AccountModel>();
  const sut = new RemoteAuthentication(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const authenticationParams = mockAuthenticationParams();

    await sut.execute(authenticationParams);

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('post');
    expect(httpClientSpy.body).toEqual(authenticationParams);
  });

  test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };

    const promise = sut.execute(mockAuthenticationParams());

    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  test('Should throw UnexpectedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const promise = sut.execute(mockAuthenticationParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.execute(mockAuthenticationParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.execute(mockAuthenticationParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should return an Authentication.Model if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const account = await sut.execute(mockAuthenticationParams());

    expect(account).toEqual(httpResult);
  });
});
