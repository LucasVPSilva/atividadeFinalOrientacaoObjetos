import {randomUUID} from "crypto";

export class Tweet {
  private _id: string;
  constructor(public content: string, public type: string) {
    this._id = randomUUID();
  }

  reply(content: string): void {
    // const addReply = new content
  }

  like(): void {
    console.log(`Tweet: ${this.content}`);
  }

  show(): void {}

  showReplies(): void {}
}
