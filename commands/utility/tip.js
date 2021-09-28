const Discord = require("discord.js")
module.exports = {
  name: 'tip',
  aliases: ['tips'] ,
  description: 'to ge ta random tip',
  usage: 'prefix+tip',
  run : async(client, message, args) => {
    const disbut = require('discord-buttons');
disbut(client);

  const t = ['use prefix+setprefix to set prefix','use prefix+daily to claim your daily reward','join support server for daily rewards','you can get rewards by voting']
  const random = t[Math.floor(Math.random()* t.length)]
  const em = new Discord.MessageEmbed()
  .setTitle('tip')
  .setDescription(random)

 message.channel.send(em)
  }
}