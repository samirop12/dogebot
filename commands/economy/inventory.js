const Discord = require("discord.js")
const db = require('quick.db')

module.exports = {
  name: 'inventory',
  aliases: ['inv'] ,
  description: 'to see your inventory',
  usage: 'prefix+inv',
  run : async(client, message, args) => {
    const item = db.get(message.author.id)
    if(item === null) {
      item = "you have nothing in your inventory"
    }
  const em = new Discord.MessageEmbed()
  .setTitle('your inventory')
  .addField('items',item)
  .setColor('RANDOM')
  
  message.channel.send(em)
  }
}