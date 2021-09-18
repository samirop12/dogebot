const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'hitler',
  description: 'to generate a hitler image',
  usage: 'prefix+hitler',
  run : async(client, message, args) => {
   let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.hitler(avatar);
        let attachment = new Discord.MessageAttachment(image, "hitler.png");
        return message.channel.send(attachment);
  }
}