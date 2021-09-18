const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'start',
  description: 'Start Your Journey!',
  usage: '!start',
  run : async(client, message, args) => {
  if (db.get(`user_${message.author.id}.bal`) === null) {

    db.set(`user_${message.author.id}`, { bal: 0 })
    db.set(`bank_${message.author.id}`, { bank: 0})
    db.set(`rank_${message.author.id}`, {rank: 0})
    message.reply("I have made an account for you, make sure you follow T&C For economy, good luck for your new journey")
 
    }
    else {
      message.reply("you already have an account")
  }
}
}