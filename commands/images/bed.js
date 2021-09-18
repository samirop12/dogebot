const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'bed',
  description: 'to generate a bed image',
  usage: 'prefix+bed',
  run : async(client, message, args) => {
   let mo = message.mentions.users.first() 
   if(!mo) return message.channel.send('pls mention a user')
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.bed(message.author.displayAvatarURL({ dynamic: false, format: 'png' }),avatar);
        let attachment = new Discord.MessageAttachment(image, "bed.png");
        return message.channel.send(attachment);
  }
}