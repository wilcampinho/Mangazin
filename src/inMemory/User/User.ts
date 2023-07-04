import { User } from "models/User";
import { InMemoryUserInterface } from "./iUser";

export class UserArray implements InMemoryUserInterface {
  private array: User[];

  constructor() {
    this.array = [];
  }

  addUser(user: User): string {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*\w).{8,}$/;

    if (!passwordRegex.test(user.password)) return "Senha fora do padrao!";

    this.array.push(user);
    return "Usuario criado!";
  }

  findById(id: number): User {
    throw new Error("Method not implemented.");
  }

  findByEmail(email: string): User {
    throw new Error("Method not implemented.");
  }

  checkAuth(email: string, password: string): boolean {
    throw new Error("Method not implemented.");
  }
}
