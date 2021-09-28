const { MessageEmbed } = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: 'leaderboard',
  aliases: ['lb','top'] ,
  description: 'to see the leaderboard of this guild',
  usage: 'prefix+leadeboard',
  run : async(client, message, args) => {
  
  let money = db.all().filter(data => data.ID.startsWith(`user_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("GREEN")
                .setFooter("Server has no leaderboard")
            return message.channel.send(noEmbed)
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]).tag : "Unknown User#0000"}**\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`State rankings ${message.guild.name}`)
            .setColor("GREEN")
            .setDescription(finalLb)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
  }
}