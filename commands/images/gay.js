const Discord = require("discord.js")
module.exports = {
  name: 'gay',
  aliases: ['gayimage'] ,
  description: 'a image command to generate gayimage',
  usage: '!gay',
  run : async(client, message, args) => {
 let user = message.mentions.users.first() || message.author
let av = user.displayAvatarURL({ dynamic: true, format: "png" })
let imgae = `https://api.cool-img-api.ml/gay?image=${av}`
let image = new Discord.MessageAttachment(imgae, "gay_flag.gif")
message.channel.send(image)
  }
}