const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'wanted',
  description: 'to generate a wanted image',
  usage: 'prefix+wanted',
  run : async(client, message, args) => {
   let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.wanted(avatar);
        let attachment = new Discord.MessageAttachment(image, "wanted.png");
        return message.channel.send(attachment);
  }
}