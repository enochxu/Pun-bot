const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var stop = 0;
  var x = 0;
  while(!stop){
    if(args[x]){
      x = x + 1;
    }
    else{
      stop = 1;
    }
  }
  if(x <= 1){
    let tooLittleObjects = new Discord.RichEmbed()
      .addField("Make sure that you have 2 objects.",
      "Format: !choose <object1NoSpaces> <object2NoSpaces>... <objectXNoSpaces>")
      .setColor(0x336699)
    message.channel.send(tooLittleObjects);
    return;
  }
  let choice = Math.floor(Math.random() * x);
  message.channel.send(`I choose ${args[choice]}`);

  return;
}
module.exports.help = {
  name: "choose"
}
