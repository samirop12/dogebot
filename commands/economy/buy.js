const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'buy',
  description: 'to buy something from store',
  usage: 'prefix+buy',
  run : async(client, message, args) => {
        if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
      
 
 const op = args.slice(0).join("  ")
    let bal = db.get(`user_${message.author.id}.bal`)
    let item = db.get(message.author.id, {item: [] })
    if(db.has('sword')) {
     return message.channel.send('you aleady own the item')
    } else
     {
        if(op === 'sword') {
      if(bal < 2000) {
        return message.reply('poor guy you dont have enough money, work hard') 
         } else {
           
           db.push(message.author.id,"sword")
           db.subtract(`user_${message.author.id}.bal`,2000)
           db.set(`sword`,1)
           message.channel.send('you bought a sword for 2k')
         }
    }
    }
  
  }
}
   }