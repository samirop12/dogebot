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
  if(!ch) return message.reply('you cannot withdraw 0 bruh ')
  if(bank < ch) {
    message.reply('your bank is empty kiddo')
  } else {
    message.reply(`${ch}₹ has been withdrawn `)
    db.add(`user_${message.author.id}.bal`, ch)
    db.subtract(`bank_${message.author.id}.bank`, ch)
  }
  }
}
}