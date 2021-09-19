const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'buy',
  description: 'to buy something from store',
  usage: 'prefix+buy',
  run : async(client, message, args) => {
 const op = args.slice(0).join("  ")
    let bal = db.get(`user_${message.author.id}.bal`)
    let item = db.get(message.author.id, {item: [] })
    if(op === 'sword') {
      if(bal < 2000) {
        return message.reply('poor guy you dont have enough money, work hard') 
         } else {
           
           db.push(message.author.id,"sword")
           db.subtract(`user_${message.author.id}.bal`,2000)
           message.channel.send('you bought a sword for 2k')
         }
    }
  }
}