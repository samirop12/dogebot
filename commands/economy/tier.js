const tier = ['gold','silver','bronze','diamond','supreme','god']
const db = require('quick.db')
const Discord = require("discord.js")
module.exports = {
  name: 'rank',
  description: 'to check you rank',
  usage: 'prefix+rank',
  run : async(client, message, args) => {
         if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
   let rank = db.get(`rank_${message.author.id}.rank `)
   if(rank === null) rank = 'no rank'
   const e = new Discord.MessageEmbed()
   .setTitle('your ranks')
 .addField(`ranks:`,`${rank} `)
 message.channel.send(e)
  }
}
}