import BaseClient from "./BaseClient";
import {
  LoginDTO,
  ListarBoletosParams,
  PaginatedBoleto,
  Boleto,
} from "./types";

class Api extends BaseClient {
  constructor() {
    super({
      baseURL: "http://localhost:3333",
      withCredentials: true,
    });
  }

  public async login(data: LoginDTO): Promise<{ user: { email: string } }> {
    try {
      const response = await this.instance.post<{ user: { email: string } }>(
        "/session/login",
        data
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  public async logout(): Promise<void> {
    try {
      await this.instance.post<void>("/session/logout");
    } catch (error) {
      throw error;
    }
  }

  public async recuperarBoleto(nossoNumero: string): Promise<Boleto> {
    const response = await this.instance.get<Boleto>(`/boletos/${nossoNumero}`);

    return response;
  }

  public async listarBoletos({
    page = 1,
    size = 10,
    ...rest
  }: ListarBoletosParams): Promise<PaginatedBoleto> {
    try {
      const response = await this.instance.get<PaginatedBoleto>("/boletos", {
        params: {
          page,
          size,
          ...rest,
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new Api();
