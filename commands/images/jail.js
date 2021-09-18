const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'jail',
  description: 'to generate a jail image',
  usage: 'prefix+jail',
  run : async(client, message, args) => {
    let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.jail(avatar);
        let attachment = new Discord.MessageAttachment(image, "jail.png");
        return message.channel.send(attachment);
  }
}