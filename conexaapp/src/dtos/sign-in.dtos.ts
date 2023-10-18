export interface SignInRequestDTO {
  email: string;
  password: string;
}

export interface SignInResponseDTO {
  data: {
    nome: string;
    email: string;
    token: string;
  };
}
