const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: 'balance',
  aliases: ['bal'],
  description: 'to check you eco balance',
  usage: '!balance',
  run : async(client, message, args) => {
 if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
      const muser = message.mentions.users.first() || message.author;
      if(muser.bot) return message.reply('a bot cannot hold a account')
    let bal = db.get(`user_${muser.id}.bal`)
 let bank = db.get(`bank_${muser.id}.bank`)
 if(bank === null) bank = 0
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}\'s coins `)
    .addField('wallet',`₹ ${bal} `)
    .addField('bank',` ₹ ${bank}   `)
    .setColor("YELLOW")
    
    .setTimestamp()

    message.channel.send(embed)


  }
  }
}