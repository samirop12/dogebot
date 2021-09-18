const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'spank',
  description: 'to generate a spank image',
  usage: 'prefix+spank',
  run : async(client, message, args) => {
   let mo = message.mentions.users.first() 
   if(!mo) return message.channel.send('pls mention a user')
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.spank(message.author.displayAvatarURL({ dynamic: false, format: 'png' }),avatar);
        let attachment = new Discord.MessageAttachment(image, "spank.png");
        return message.channel.send(attachment);
  }
}