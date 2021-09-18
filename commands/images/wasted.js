const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'wasted',
  description: 'to generate a wasted image',
  usage: 'prefix+wasted',
  run : async(client, message, args) => {
   let mo = message.mentions.users.first() || message.author
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.wasted(avatar);
        let attachment = new Discord.MessageAttachment(image, "wasted.png");
        return message.channel.send(attachment);
  }
}