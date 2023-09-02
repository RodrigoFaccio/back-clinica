import { loginController } from "../controller/user"; // Importe o controlador se necessário
import { createUser, login } from "../services/user"; // Importe o serviço que você deseja testar

describe('Testes do usuario', () => {
  test('Deve fazer o login do usuário com sucesso', async () => {
    const email = 'rodrigo1612fm@gmail.com';
    const password = 'rodrigo1234';

    const data = {
      email,
      password
    }

    // Chame o serviço de login
    const response = await login(data);
    expect(response.code).toEqual(200);
    
  });
  test('Deve dar erro ao fazer login com usuario errado', async () => {
    const email = 'rodrigo1612fm444@gmail.com';
    const password = 'rodrigo1234';

    const data = {
      email,
      password
    }

    // Chame o serviço de login
    const response = await login(data);
    expect(response.code).toEqual(400);
    
  });
  
  test('Erro ao criar um usuario duplicado', async () => {
    const email = 'rodrigo1612fm@gmail.com';
    const password = 'rodrigo1234';

    const data = {
      email,
      password
    }

    // Chame o serviço de login
    const response = await createUser(data);
    expect(response.code).toEqual(400);

    
  });
});
