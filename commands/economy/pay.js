const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: 'pay',
  aliases: ['give'] ,
  description: 'to give a user some money ',
  usage: '!pay',
  run : async(client, message, args) => {
    
     if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
      let bal = db.get(`user_${message.author.id}.bal`)
      const muser = message.mentions.users.first()
    if(!muser) return message.channel.send('pls mention a user a user you want to pay')
     if(muser.id === message.author.id) return message.reply('you cant play your self dont act as an idiot')
          if(muser.bot) return message.channel.send('you cannot pay  a bot, foolish boy')
      const amount = args[1]
      if(!amount) return message.channel.send('pls specify a amount or do you want to pay 0 to the user')
      if(bal < amount) {
        return message.channel.send('no enough money')      
      }
        db.subtract(`user_${message.author.id}.bal`, amount)
     db.add(`user_${muser.id}.bal`,amount)
    message.channel.send(`${muser} has been credited ${amount}₹ by ${message.author.username}   `)
    muser.send('you have been credited ${amount}  ')
    }
  }
}