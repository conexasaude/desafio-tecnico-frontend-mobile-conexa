import { RemoteGetAppointmentsById } from '~/data/usecases';
import { HttpStatusCode } from '~/data/protocols/http';
import { UnexpectedError } from '~/domain/errors';
import { HttpClientSpy } from '~/data/test/mocks';

import faker from 'faker';
import { AppointmentModel } from '~/domain/models';
import { mockAppointmentModel } from '~/domain/test';

type SutTypes = {
  sut: RemoteGetAppointmentsById;
  httpClientSpy: HttpClientSpy<AppointmentModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<AppointmentModel>();
  const sut = new RemoteGetAppointmentsById(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteGetAppointmentsById', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);

    await sut.execute();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('get');
  });

  test('Should throw UnexpectedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should return an AppointmentModel if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockAppointmentModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const response = await sut.execute();

    expect(response).toEqual(httpResult);
  });
});