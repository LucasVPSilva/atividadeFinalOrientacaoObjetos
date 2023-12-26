export class Tweet {
  constructor(
    private id: string,
    public content: string,
    public type: string
  ) {}

  reply(content: string): void {
    // const addReply = new content
  }

  like(): void {}

  show(): void {}

  showReplies(): void {}
}
