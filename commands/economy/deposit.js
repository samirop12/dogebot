const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'deposit',
  aliases: ['dep'] ,
  description: 'to add money inside your bank',
  usage: 'prefix=deposit',
  run : async(client, message, args) => {
          if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd use prefix+start to use  it `)
    }

    else {
const oo = args[0]
if(!oo) return message.channel.send('pls specify a value to add')
 let bank = db.get(`bank_${message.author.id}.bank`)
    let bal = db.get(`user_${message.author.id}.bal`)
if(bal < oo) {
   message.channel.send('no enough money')
} else {
 message.channel.send(`${oo}₹ has been deposited to your bank, wow `)
db.add(`bank_${message.author.id}.bank`, oo)
 db.subtract(`user_${message.author.id}.bal`, oo)
}

  }
}
   }