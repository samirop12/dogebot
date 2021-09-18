const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'trash',
  description: 'to generate a trash image',
  usage: 'prefix+trash',
  run : async(client, message, args) => {
    let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trash(avatar);
        let attachment = new Discord.MessageAttachment(image, "trash.png");
        return message.channel.send(attachment);
  }
}