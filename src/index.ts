import {User} from "./models/User";

// Testando um usuario

const newUser = new User(
  "1010",
  "Lucas",
  "lucasTecoTeco",
  "lucas@lucas",
  "12345"
);

console.log(newUser);

newUser.sendTweet();
