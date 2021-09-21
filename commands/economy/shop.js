const Discord = require("discord.js")
module.exports = {
  name: 'shop',
  aliases: ['bazar'] ,
  description: 'to see items in shop',
  usage: 'prefix+shop',
  run : async(client, message, args) => {
         if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
    const em = new Discord.MessageEmbed()
    .setTitle('page 1')
    .setDescription('items')
    .addField('sword','use to go for hunting')
    .addField('fishing rod','use to fish ')
    message.channel.send(em)

  const ar = args.slice(0).join("  ")
if(ar === 'fishing rod') {

}


    
  }
  }
}