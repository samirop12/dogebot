const Discord = require("discord.js")
module.exports = {
  name: 'tictactoe',
  aliases: ['ttt'] ,
  description: 'a ttt command to play ttt',
  usage: 'prefix+ttt',
  run : async(client, message, args) => {
 const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.RockPaperScissors()
 RockPaperScissors.startGame(message)

  }
}