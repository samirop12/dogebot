const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'reduce',
  description: 'owner only command to reduce  a amount of money',
  usage: 'prefix+reduce',
  run : async(client, message, args) => {
 if(!message.author.id === '785134353172398081') return message.reply('only owner can use this')
 const op = args.slice(0).join("  ")
 if(!op) return message.channel.send('pls specify a amount')
 db.subtract(`user_${message.author.id}.bal`,op)
  }
}