import BaseClient from "./BaseClient";
import { LoginDTO } from "./interfaces";

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
}

export default new Api();
