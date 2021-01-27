const Discord = require("discord.js");
const apikey = require("./keys.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

module.exports.run = async (bot, message, args) => {

  let username = args.join(" ");
  let platform = "pc";

  let data = ft.user(username, platform).then(data => {
    const solo = new Discord.RichEmbed()
      .setColor(0x336699)
      .setThumbnail("https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428")
      .setTitle(`Solo Stats for ${data.username}`)
      .addField("Wins", data.stats.solo.wins, true)
      .addField("KD", data.stats.solo.kd, true)
      .addField("Kills", data.stats.solo.kills, true)
      .addField("Kills per match", data.stats.solo.kills_per_match, true)
      .addField("Matches Played", data.stats.solo.matches, true)
      .addField("Times placed top 5", data.stats.solo.top_5, true)
    message.channel.send(solo);
    const duo = new Discord.RichEmbed()
      .setColor(0x336699)
      .setThumbnail("https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428")
      .setTitle(`Duo Stats for ${data.username}`)
      .addField("Wins", data.stats.duo.wins, true)
      .addField("KD", data.stats.duo.kd, true)
      .addField("Kills", data.stats.duo.kills, true)
      .addField("Kills per match", data.stats.duo.kills_per_match, true)
      .addField("Matches Played", data.stats.duo.matches, true)
      .addField("Times placed top 5", data.stats.duo.top_5, true)
    message.channel.send(duo);
    const squad = new Discord.RichEmbed()
      .setColor(0x336699)
      .setThumbnail("https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428")
      .setTitle(`Squad Stats for ${data.username}`)
      .addField("Wins", data.stats.squad.wins, true)
      .addField("KD", data.stats.squad.kd, true)
      .addField("Kills", data.stats.squad.kills, true)
      .addField("Kills per match", data.stats.squad.kills_per_match, true)
      .addField("Matches Played", data.stats.squad.matches, true)
      .addField("Times placed top 5", data.stats.squad.top_5, true)
    message.channel.send(squad);

  }).catch(e => {
    console.log(e);
    message.channel.send("Couldn't find user in the database.")
  });
  return;
}

module.exports.help = {
  name: "fortnite"
}
