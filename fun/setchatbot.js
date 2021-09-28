const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
 name: "setchat",
 run: (client, message, args) => {
 
 let chatchannel = message.mentions.channels.first() 
 
 if(!chatchannel) { 
 return message.channel.send("Please Mention the channel first")
 }
 

 
 db.set(`chatchannel_${message.guild.id}`, urmom.id) 
 
 message.channel.send(`Chat Bot Channel is set as ${chatchannel}`) 
 }
}