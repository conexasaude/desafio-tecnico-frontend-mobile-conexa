import { RemoteGetAppointments } from '~/data/usecases';
import { HttpStatusCode } from '~/data/protocols/http';
import { AccessDeniedError, UnexpectedError } from '~/domain/errors';
import { HttpClientSpy, mockAppointmentListModel } from '~/data/test/mocks';

import faker from 'faker';
import { AppointmentModel } from '~/domain/models';

type SutTypes = {
  sut: RemoteGetAppointments;
  httpClientSpy: HttpClientSpy<AppointmentModel[]>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<AppointmentModel[]>();
  const sut = new RemoteGetAppointments(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteGetAppointments', () => {
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

  test('Should throw AccessDenied if HttpClient returns 403', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    };

    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new AccessDeniedError());
  });

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should return AppointmentList if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockAppointmentListModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const promise = await sut.execute();

    expect(promise).toEqual([
      {
        id: httpResult[0].id,
        medico: {
          id: httpResult[0].medico.id,
          nome: httpResult[0].medico.nome,
          email: httpResult[0].medico.email,
        },
        paciente: httpResult[0].paciente,
        dataConsulta: httpResult[0].dataConsulta,
        observacao: httpResult[0].observacao,
      },
      {
        id: httpResult[1].id,
        medico: {
          id: httpResult[1].medico.id,
          nome: httpResult[1].medico.nome,
          email: httpResult[1].medico.email,
        },
        paciente: httpResult[1].paciente,
        dataConsulta: httpResult[1].dataConsulta,
        observacao: httpResult[1].observacao,
      },
    ]);
  });
});
