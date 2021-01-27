const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.avatarURL;
  let help = new Discord.RichEmbed()
      .setTitle("Commands")
      .setThumbnail(bicon)
      .addField("!help", "Shows list of commands.")
      .addField("!ping", "Tells you the ping of the bot.")
      .addField("!report <@user> <reason>", "Reports a user in the server.")
      .addField("!request <requestHere>", "Request a new server/bot feature")
      .addField("!choose <object1NoSpaces> <object2NoSpaces>... <objectXNoSpaces>", "Randomly choose between 2 or more different things.")
      //.addField("!fortnite <username>", "Check someone's fortnite stats")
      .addField("!delete <number or all>", "Deletes between 0-99 messages or all messages. Only server management can access this command. This command has some known bugs.")
      .addField("!play <youtube url>", "Play audio of a youtube video. This feature is in beta. May be buggy.")
      .addField("!stop", "Stop the song being played in the audio channel.")
      .addField("!prank", "Prank tool. Only pun-ishment can use this")
      .setFooter("*Commands only work when bot is online.")
      .setColor(0x336699)
  message.channel.send(help);
  return;
}

module.exports.help = {
  name: "help"
}
