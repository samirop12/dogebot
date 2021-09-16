```js
const Discord = require("discord.js")
module.exports = {
  name: '',
  aliases: [''] ,
  description: '',
  usage: '',
  run : async(client, message, args) => {
 
  }
}
```
```js
     if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
      
    }