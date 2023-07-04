import {User} from "../src/models/User";
import { UserArray } from "../src/inMemory/User/User";
import { InMemoryUserInterface } from "../src/inMemory/User/iUser";

const memory: InMemoryUserInterface = new UserArray();

describe("Feature: Criar usuario", () => {
  it("Fluxo principal: Apos a insercao dos dados necessario pelo usuario, ha o registro do novo usuario em memoria", () => {
    // Given
    let sut = new User(1, "novo@usuario", "123abcAbc#$%");

    // When
    let result = memory.addUser(sut);
    
    // Then
    expect(result).toBe("Usuario criado!");
  });

  it("Fluxo alternativo: Se houver uma insercao fora do padrao aceito, nao sera executado o cadastro e ocorrera uma mensagem de erro.", () => {
  // Given
  let sut = new User(2, "outro@usuario", "1234");

  // When
  let result = memory.addUser(sut);

  // Then
  expect(result).toBe("Senha fora do padrao!");
  });

  // it("Fluxo alternativo: Se houver uma insercao de um cadastro ja existente, nao sera executado o cadastro e ocorrera uma mensagem de erro.", () => {
  // Given
  // let sut = new PLACEHOLDER
  // When
  // ACTION
  // Then
  // expect().toBe();
  // });
});
