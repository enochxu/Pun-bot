const Discord = require("discord.js");
const serverids = require("./serverids.json");
let punid = serverids.punid;
let adminOneid = serverids.adminOneid;

module.exports.run = async (bot, message, args) => {
  if((message.author.id == punid) || (message.author.id == adminOneid)){
    if(args[0] == "all"){
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));
      message.channel.bulkDelete(100).catch(error => message.channel.send("Error deleting messages."));      
      return;
    }
    if(!isNaN(args[0])){
      let amount = args[0];
      amount++;
      message.channel.bulkDelete(amount).catch(error =>
      message.channel.send("Error deleting messages. Keep in mind that you can only delete up to 99 messages at once.")
    );
    }
    else{
      message.channel.send("Please provide a valid integer or use all to delete all messages on the channel.");
      return;
    }
  }
  else{
    message.channel.send("You do not have permission to use this command.");
    return;
  }
  return;
}

module.exports.help = {
  name: "delete"
}
