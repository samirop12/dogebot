const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

const { Collection, Client, Discord } = require('discord.js')
const client = new Client({disableEveryone: true})
const fs = require('fs');
const db = require("quick.db")
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
  
  client.user.setPresence({ activity: { name: 'can i be the best eco bot', type: 'LISTENING' }, status: "dnd"})

})
 






client.on('message', async message =>{



let prefix = db.get(`prefix_${message.guild.id}`)

if(prefix === null) prefix = "*"

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 


})

client.login('ODg3NjgyNzcwMzUxMDYzMDQw.YUHtAA._UZXMfOOlUZPwnZcSel1Vp9hgNs')