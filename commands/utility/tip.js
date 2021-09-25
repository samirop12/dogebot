const Discord = require("discord.js")
module.exports = {
  name: 'tip',
  aliases: ['tips'] ,
  description: 'to ge ta random tip',
  usage: 'prefix+tip',
  run : async(client, message, args) => {
  const t = ['use prefix+setprefix to set prefix','']
  const random = t[Math.floor(Math.random()* t.length)]
  const em = new Discord.MessageEmbed()
  .setTitle('tip')
  .setDescription(random)
  message.channel.send(em)
  }
}