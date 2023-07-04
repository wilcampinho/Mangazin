import iDomainObject from "./domainObject";

export interface iUser extends iDomainObject {
  email: string;
  password: string;
}

export class User implements iUser {
  public id: number;
  public email: string;
  public password: string;

  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
