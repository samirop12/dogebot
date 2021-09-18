const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'triggered',
  aliases: ['trigger'] ,
  description: 'to generate a triggered image',
  usage: 'prefix+triggered',
  run : async(client, message, args) => {
    let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
  }
}