const Discord = require("discord.js");
const serverids = require("./serverids.json");
let punid = serverids.punid;
let botid = serverids.botid;

module.exports.run = async (bot, message, args) => {
    let recievereportserver = serverids.recievereportserver;
    let sendreportserver = serverids.sendreportserver;
    let rUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    if(message.channel.id == sendreportserver){
      if(rUser.id == punid){
        message.channel.send("You can't report our God, Pun-ishment")
        return;
      }
      if(rUser.id == message.author.id){
        message.channel.send("You can't report yourself.")
        return;
      }
      if(rUser.id == botid){
        message.channel.send("Boi you can't report me.")
        return;
      }
      let reportUserEmbed = new Discord.RichEmbed()
      .setTitle("User Reported, the admins will look into it.")
      .setColor(0x336699)
      .setTimestamp()
      message.channel.send(reportUserEmbed)

      let reportAdminEmbed = new Discord.RichEmbed()
      .setTitle("User Report")
      .setColor(0x336699)
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Reason", reason)
      .setTimestamp()
      bot.channels.get(recievereportserver).send(reportAdminEmbed)
    }
  else{
    message.channel.send("Please use the report channel to report someone")
  }
    return;
}

module.exports.help = {
  name: "report"
}
