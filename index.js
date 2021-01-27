const botconfig = require("./botconfig.json")
const Discord = require("discord.js");
const fs = require("fs");
const Fortnite = require("fortnite");
var antispam = require("discord-anti-spam");
const ft = new Fortnite("b1abaddf-ddda-4d6e-baca-bb8011111065");
const serverids = require("./commands/serverids.json");
const bot = new Discord.Client();
let welcomeserver = serverids.welcomeserver;
let logserver = serverids.logserver;
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {    console.log("Bot is ready");
    bot.user.setStatus("online")
    bot.user.setActivity("!help")
});

bot.on("guildMemberAdd", (member) => {
    member.guild.channels.get(logserver).send(`${member.user} has joined the ASU.`);
    member.guild.channels.get(welcomeserver).send(`${member.user} please tell us who you are in order to access the server.`);
});

bot.on("guildMemberRemove", (member) => {
    member.guild.channels.get(logserver).send(`${member.user} has left the ASU.`);
});

antispam(bot, {
  warnBuffer: 3,
  maxBuffer: 7,
  interval: 1000,
  warningMessage: "Please stop spamming or you will be autobanned.",
  banMessage: "has been autobanned for spamming.",
});

bot.on("message", async message => {
    if(message.author.equals(bot.user)) return;
    if(message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if((cmd == "nigger") || (cmd == "nigga")){
      message.delete(2000);
      message.channel.send(`${message.author}That word is banned from the server, please don't use it`);
      setTimeout(function(){
        message.channel.bulkDelete(1).catch(error => message.channel.send("Error deleting messages."));
      }, 5000);

      return;
    }
});

bot.login(botconfig.token);
