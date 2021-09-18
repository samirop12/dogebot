const tier = ['gold','silver','bronze','diamond','supreme','god']
const db = require('quick.db')
const Discord = require("discord.js")
module.exports = {
  name: 'rank',
  description: 'to check you rank',
  usage: 'prefix+rank',
  run : async(client, message, args) => {
   let rank = db.get(`rank_${message.author.id}.rank `)
   if(rank === null) rank = 'no rank'
   const e = new Discord.MessageEmbed()
   .setTitle('your ranks')
 .addField(`ranks:`,`${rank} `)
 message.channel.send(e)
  }
}