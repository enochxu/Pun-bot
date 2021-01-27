const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.voiceChannel){
    message.channel.send("You are not in a voice channel");
    return;
  }
  message.member.voiceChannel.leave();
}

module.exports.help = {
  name: "stop"
}
