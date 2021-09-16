const db = require("quick.db")

module.exports = {
  name: 'setprefix',
  description: 'to set a costom prefix for a guild',
  usage: 'prefix+setprefix',
 run : async(client, message, args) => {
          if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("❌ **Please make sure you have the 'administrator' permission on this server to use this command!**")
   const newprefix = args[0]
   if(!newprefix) return message.channel.send("pls specify a prefix")
   message.channel.send(`the prefix has been changed to ${newprefix} `)
   db.set(`prefix_${message.guild.id}`,args[0])

 }
}