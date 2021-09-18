const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'shit',
  aliases: ['poop'] ,
  description: 'to generate a pop image',
  usage: 'prefix+poop',
  run : async(client, message, args) => {
    let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.shit(avatar);
        let attachment = new Discord.MessageAttachment(image, "shit.png");
        return message.channel.send(attachment);
  }
}