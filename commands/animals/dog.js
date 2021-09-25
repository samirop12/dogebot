const Discord = require("discord.js")
module.exports = {
  name: 'dogimage',
  description: 'to generate a dog image',
  usage: 'prefix+dogimage',
  run : async(client, message, args) => {
 let dogs = ["https://tenor.com/view/really-funny-animals-dogs-gif-10507212", "https://tenor.com/view/funny-animals-dogs-monkey-gif-10423265", "https://tenor.com/view/goodbye-dog-gif-10095569", "https://tenor.com/view/hi-dogs-gif-9273068", "https://tenor.com/view/dogs-funny-dog-teeth-teeth-close-up-gif-15324066", "https://tenor.com/view/cute-dogs-gif-3990999", "https://tenor.com/view/dog-eyebrow-funny-eyebrow-raise-gif-13185653", "https://tenor.com/view/scary-angry-pissed-mad-bro-gif-10066144", "https://tenor.com/view/please-doggy-cute-puppy-gif-6206352"]
  message.channel.send(dogs[Math.floor(Math.random() * dogs.length)])
  }
}