const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'colorfy',
  description: 'to make your avatar of other color',
  usage: 'prefix+colorfy',
  run : async(client, message, args) => {
   let mo = message.mentions.users.first() || message.author
   const ms = args.slice(1).join("  ")
      let avatar = mo.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.colorfy(avatar, ms);
        let attachment = new Discord.MessageAttachment(image, "hitler.png");
        return message.channel.send(attachment);
  }
}