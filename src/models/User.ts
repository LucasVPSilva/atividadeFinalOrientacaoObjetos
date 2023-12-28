import {randomUUID} from "crypto";
import {users} from "../database/users";
import {Tweet} from "./Tweet";

export class User {
  private id: string;
  private message: Tweet[];
  constructor(
    public name: string,
    public username: string,
    public email: string,
    private password: string
  ) {
    this.id = randomUUID();
    this.message = [];
    users.push(this);
  }

  sendTweet(tweet: Tweet) {
    this.message.push(tweet);
    console.log("Tweet enviado!");
  }

  follow(user: User) {
    console.log("Seguindo!");
  }

  showFeed() {
    console.log("Mostrando o feed!");
  }

  showTeets() {
    console.log("Mostrando os tweets!");
  }
}
