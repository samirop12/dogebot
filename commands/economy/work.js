const Discord = require("discord.js")
const cooldown = new Set()
const db = require('quick.db')
module.exports = {
  name: 'work',
  description: 'to work and get some money',
  usage: 'prefix+work',
  run : async(client, message, args) => {
      if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using start cmd`)
    }

    else {
       const muser = message.author;
      if(cooldown.has(message.author.id)) {
        message.reply('pls wait 2hrs before using this command again, working alot will kill you one day')
      } else {
        let bal = db.get(`user_${message.author.id}.bal`)
           let money = Math.round(Math.random() * 1000)|| Math.round(Math.random()*0) || Math.round(Math.random()* 100)
        const jobs = [`you sold your kidney and got ${money}₹ `,`you treated a patient and got ${money} ₹`,`you worked in a film and got ${money} ₹`,`you sold some drugs and got ${money} ₹`]
        const we = new Discord.MessageEmbed()
      .setDescription(jobs[Math.floor(Math.random() * jobs.length)])
      .setColor('RANDOM')
      db.add(`user_${message.author.id}.bal`, money)
   message.channel.send(we)

      cooldown.add(message.author.id)
      setTimeout(() => {
        cooldown.delete(message.author.id)
      },7200000)
      }
    }
  }
}