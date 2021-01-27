const Discord = require("discord.js");
const serverids = require("./serverids.json");

module.exports.run = async (bot, message, args) => {
  let sendsuggestionserver = serverids.sendsuggestionserver;
  let recievesuggestionserver = serverids.recievesuggestionserver;
  let suggestion = args.join(" ");
  if(!suggestion) return message.channel.send("Do not leave the description blank");

  if(message.channel.id == sendsuggestionserver){
  let suggestionUserEmbed = new Discord.RichEmbed()
    .setTitle("Thank you for the feedback!")
    .setColor(0x336699)
    .setTimestamp()
    message.channel.send(suggestionUserEmbed);
    let suggestionAdminEmbed = new Discord.RichEmbed()
    .addField("New Suggestion", suggestion)
    .setColor(0x336699)
    .setTimestamp()
    bot.channels.get(recievesuggestionserver).send(suggestionAdminEmbed);
    return;
  }
  else{
    message.channel.send("Please use the request channel to send a request.");
  }
  return;
}

module.exports.help = {
  name: "request"
}
