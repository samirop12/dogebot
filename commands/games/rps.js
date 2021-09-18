const Discord = require("discord.js")
module.exports = {
  name: 'rps',
  aliases: ['rockpaperscissors'] ,
  description: 'to paly rockpaper scissors',
  usage: 'prefix+rps',
  run : async(client, message, args) => {
 const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.RockPaperScissors()
 RockPaperScissors.startGame(message)
  }
}