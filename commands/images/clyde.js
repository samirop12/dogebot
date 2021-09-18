const Discord = require("discord.js")
const canvacord = require("canvacord");
module.exports = {
  name: 'clyde',
  description: 'to generate a clyde image',
  usage: 'prefix+clyde',
  run : async(client, message, args) => {
    let mo = args.slice(0).join("  ")
    if(!mo) return message.channel.send('pls speficy some text')
        let image = await canvacord.Canvas.clyde(mo);
        let attachment = new Discord.MessageAttachment(image, "clyde.png");
        return message.channel.send(attachment);
  }
}