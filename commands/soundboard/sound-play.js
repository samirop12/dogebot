const discord = require('discord.js');
const path = require('path');
module.exports = {
name: 'sb-play',
aliases: ['soundboard-play', 'sbp', 'sb-p'],
description: 'Play a sound insoundboard',
run: async (client, message, args) => {
    const sb = args.shift();
    if(!sb) return message.channel.send("Please choose a sound!")
    const channel = message.member.voice.channel;
	if(!channel) return message.channel.send('Please connect to a voice channel to use soundboard');
if(sb === 'ahshit') {
        channel.join().then(async connection => {
            const dispatcher = connection.play(path.join(__dirname + '/audio/ahshit.mp3'));
            const e = await message.react('🎙️');
            dispatcher.on('speaking', speaking => {
                if(!speaking) {
            channel.leave();
            e.remove()
                }
            })
        })
} else if(sb === 'bruh') {
        channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/bruh.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
        })
    })
} else if(sb === 'uwu') {
    channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/uwu.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	})
} else if(sb === 'oni-chan' || "onichan") {
    channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/onichan.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	})
}
if(sb === "oioioi") {
    channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/oioioi.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	})
}
if(sb === "ara") {
    channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/araara.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	})
}
}};