export class User {
  constructor(
    private id: string,
    public name: string,
    public username: string,
    public email: string,
    private password: string
  ) {}

  sendTweet() {
    console.log("Tweet enviado!");
  }

  follow() {
    console.log("Seguindo!");
  }

  showFeed() {
    console.log("Mostrando o feed!");
  }

  showTeets() {
    console.log("Mostrando os tweets!");
  }
}
