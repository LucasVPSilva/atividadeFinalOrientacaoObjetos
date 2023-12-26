import {randomUUID} from "crypto";
import {User} from "./User";

export class Like {
  private id: string;
  constructor(private user: User) {
    this.id = randomUUID();
  }
}
