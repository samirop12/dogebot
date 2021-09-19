const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "to check the ping of the bot",
    aliases : ['p'],
  usage: "!ping ",
 run : async(client, message, args) => {
  const msg = await message.channel.send('🏓 pinging ......')
    const embed = new Discord.MessageEmbed()
    .setDescription(`webshocket ➡ ${client.ws.ping} ms \n latency ➡ ${Math.floor(msg.createdAt - message.createdAt)} `)
    await message.channel.send(embed)
    msg.delete()
 }
}