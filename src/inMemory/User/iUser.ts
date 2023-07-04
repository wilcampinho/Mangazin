import { User } from "models/User";

export interface InMemoryUserInterface {
  addUser(user: User): string;
  findById(id: number): User;
  findByEmail(email: string): User;
  checkAuth(email: string, password: string): boolean;
}
