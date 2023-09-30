import { RemoteCreateAppointment } from '~/data/usecases';
import { HttpStatusCode } from '~/data/protocols/http';
import { UnexpectedError } from '~/domain/errors';
import { mockCreateAppointmentParams, mockAppointmentModel } from '~/domain/test/mocks';
import { HttpClientSpy } from '~/data/test/mocks';

import faker from 'faker';
import { AppointmentModel } from '~/domain/models';

type SutTypes = {
  sut: RemoteCreateAppointment;
  httpClientSpy: HttpClientSpy<AppointmentModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<AppointmentModel>();
  const sut = new RemoteCreateAppointment(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteCreateAppointment', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const createAppointmentParams = mockCreateAppointmentParams();

    await sut.execute(createAppointmentParams);

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('post');
    expect(httpClientSpy.body).toEqual(createAppointmentParams);
  });

  test('Should throw UnexpectedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const promise = sut.execute(mockCreateAppointmentParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.execute(mockCreateAppointmentParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.execute(mockCreateAppointmentParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should return an AppointmentModel if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockAppointmentModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const appointment = await sut.execute(mockCreateAppointmentParams());

    expect(appointment).toEqual(httpResult);
  });
});
