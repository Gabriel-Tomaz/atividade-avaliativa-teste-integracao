import { handleLogin } from "./loginService";
require('dotenv').config();

describe("Integraçã com serviço de login", () => {
  test("Get token", async () => {
    const crendentials = {
      email: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD,
    };

    await expect(handleLogin(crendentials)).resolves.toMatch("OK")
  });
});
