const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'withdraw',
  aliases: ['with'] ,
  description: 'to withdraw a amount from your bank',
  usage: 'prefix+withdraw',
  run : async(client, message, args) => {
              if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
    let bal = db.get(`user_${message.author.id}.bal`)
  let bank = db.get(`bank_${message.author.id}.bank`)
  const ch = args[0]
  if(!ch) return message.reply('pls specify a certain amount')
  if(bank < ch) {
    message.reply('no enough money')
  } else {
    message.reply(`${ch}<:DOGE:887978747851046922> has been withdrawn `)
    db.add(`user_${message.author.id}.bal`, ch)
    db.subtract(`bank_${message.author.id}.bank`, ch)
  }
  }
}
}