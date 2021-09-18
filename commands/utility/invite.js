const Discord = require("discord.js")

module.exports = {
  name: 'invite',
  description: 'invite me to a guild',
  usage: 'prefix+invite',
  run : async(client, message, args) => {
const em = new Discord.MessageEmbed()
  .setTitle('click the link below')
  .setDescription(`[click the link](https://discord.com/oauth2/authorize?client_id=887682770351063040&scope=bot&permissions=1362119736)`)
  .setColor('GREEN')
  message.channel.send(em)
  }
}