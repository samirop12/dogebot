const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'beauty',
  description: 'to generate a beauti image',
  usage: 'prefix+beauty',
  run : async(client, message, args) => {
    let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.beautiful(avatar);
        let attachment = new Discord.MessageAttachment(image, "beautiful.png");
        return message.channel.send(attachment);
  }
}