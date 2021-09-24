const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'slot',
  aliases: ['spin'] ,
  description: 'to slot and get some eco money',
  usage: 'prefix+slot',
  run : async(client, message, args) => {
     let bal = db.get(`user_${message.author.id}.bal`)
     const am = args[0]
     if(!am) return message.channel.send('pls specify an amount')
     if(bal < am) {
       message.channel.reply('no enough money')
     } else {
  let topemo = [':grapes:,:grapes,:grapes',':apple:,:apple:,:apple:']
 let top = topemo[Math.floor(Math.random()* topemo.length)]
 let midemo = [':grapes:,:apple:,:grapes:',':apple:,:grapes:,:apple:']
 let mid = midemo[Math.floor(Math.random()* midemo.length)]
 let lowemo = [':grapes:,:apple:,:pineapple:',':apple:,:grapes:,:pineapple:']
 let low = lowemo[Math.floor(Math.random()* lowemo.length)]
 let emoji;
 let color;
 let amount = Math.floor(Math.random()*2000) - am
 if(amount > 500) emoji = mid
 if(amount > 1000) emoji = top
 if(amount < 200) emoji = low
 let mg = await message.channel.send('slotting')
 let embed = new Discord.MessageEmbed()
 .setTitle('slot')
 .setDescription(emoji)
 message.channel.send(embed)
 db.add(`user_${message.author.id}.bal`,amount)
db.subtract(`user_${message.author.id}.bal`,amount)
     }
  }
}