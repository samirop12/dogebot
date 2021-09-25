const Discord = require("discord.js")
module.exports = {
  name: 'catimage',
  aliases: ['cat'] ,
  description: 'to generate a cat image',
  usage: 'prefix+cat',
  run : async(client, message, args) => {
   let replies = [(`https://media.tenor.com/images/6b9784a001c9964a2c5a64e9db078594/tenor.gif`), (`https://media.tenor.com/images/b565fd478218963614d4d249f6d983ad/tenor.gif`),
   (`https://media1.tenor.com/images/b3fef669ae866655eee51d59728e9065/tenor.gif?itemid=13908286`),
   (`https://media1.tenor.com/images/eb39039fd8ef067bd70dcd4320e8741c/tenor.gif?itemid=11458685`),
   (`https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif`),
   (`https://media.tenor.com/images/6562518088b121eab2d19917b65ee793/tenor.gif`),
   (`https://media.tenor.com/images/a7f1f17822c4f7bbe5412fb1c4043c2c/tenor.gif`),
   (`https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif`),
   (`https://media.tenor.com/images/05d5a94ad268646d05d8862f2a3fe7ef/tenor.gif`),
   (`https://media.tenor.com/images/2d04425c74a3285dc6f9b3b602039eaf/tenor.gif`),
   (`https://media1.tenor.com/images/8c9cd36598f039fe62576e7d8b2de4a8/tenor.gif?itemid=5483839`),
   (`https://media1.tenor.com/images/fed163888ece0e7e203085ad3ab551b8/tenor.gif?itemid=5074481`),
   (`https://media.tenor.com/images/59a44ad36354cb4a30205c2deaf87d70/tenor.gif`),
   (`https://media.tenor.com/images/7da97095a64b9b7acc0d90475b2fe17e/tenor.gif`), (`https://media.tenor.com/images/a8e5112749db6a50afab81a4e7258d20/tenor.gif`)]
  let embed = new Discord.MessageEmbed()
 .setTitle(":heart_eyes:Aww this cute cat:heart_eyes:")
 .setDescription(`**Meow :heart_eyes_cat:**`)
 .setColor("RANDOM")
 .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL()) 
 .setTimestamp()
 .setImage((`${replies[Math.floor(Math.random() * replies.length)]}`))
 message.channel.send(embed)
  }
}