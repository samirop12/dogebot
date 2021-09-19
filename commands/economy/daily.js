const Discord = require("discord.js")
const cooldown = new Set();
const db = require('quick.db')
module.exports = {
  name: 'daily',
  description: 'to collect your dally reward',
  usage: 'prefix+daily',
  run : async(client, message, args) => {
           if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
      if(cooldown.has(message.author.id)) {
        message.reply('claim your reward every 24hrs bruh, dont be too much poor')
      } else {
              let money = Math.round(Math.random() * 1000)|| Math.round(Math.random()*0) || Math.round(Math.random()* 100)
          let bal = db.get(`user_${message.author.id}.bal`)
        message.channel.send(`you claimed your daily reward, you got ${money} ₹`)
        db.add(`user_${message.author.id}.bal`, money)
        cooldown.add(message.author.id)
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, 86400000)
      }
  }
}
}