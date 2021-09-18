const Discord = require("discord.js")
module.exports = {
  name: 'snake',
  description: 'to play snake game',
  usage: 'prefix+snake',
  run : async(client, message, args) => {
 const djsGames = require('djs-games')
const SnakeGame = new djsGames.SnakeGame()
SnakeGame.startGame(message)
  }
}