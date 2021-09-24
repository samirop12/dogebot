const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'help',
  aliases: ['h'] ,
  description: 'to see the help menu',
  usage: 'prefix+help',
  run : async(client, message, args) => {
  let prefix = db.get(`prefix_${message.guild.id}`)
if(prefix === null) prefix = "*"
const embe = new Discord.MessageEmbed()
.setTitle('bots help menu')
.setDescription(` • ${message.client.commands.size}commands \n   • ${client.guilds.cache.size}server \n  • ${client.users.cache.size}users \n  • [${prefix}] prefix `)
.setFooter('a Nepali economy bot','https://cdn.discordapp.com/avatars/887682770351063040/7b2252d6cd49ac8f5a3a6ac8f9452203.webp?size=1024')
.setColor('RED')
message.channel.send(embe)
  }
}