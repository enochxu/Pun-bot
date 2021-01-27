const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const queue = new Map();
module.exports.run = async (bot, message, args) => {
  const voiceChannel = message.member.voiceChannel;
  const serverQueue = queue.get(message.guild.id);
  if(!voiceChannel){
    message.channel.send("You need to be in a voice channel to play music.");
    return;
  }

  const songInfo = await ytdl.getInfo(args[0]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if(!serverQueue){
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try{
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch(error){
        console.log(`Error joining voice channel ${erorr}`);
        queue.delete(message.guild.id);
        message.channel.send("Error: I could not join the voice channel.");
        return;
      }
  }
  else{
    serverQueue.songs.push(song);
    message.channel.send(`${song.title} has been added to the queue.`)
    return;
  }
  return undefined;
}

function play(guild, song){
  const serverQueue = queue.get(guild.id)
  if(!song){
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url));
  dispatcher.on("end", () => {
    message.channel.send("Song ended.");
    play(guild, serverQueue.songs[0]);
    serverQueue.songs.shift();
  })
  dispatcher.on("error", error => {
    console.log(error);
    message.channel.send("There was an error");
  })
  dispatcher.setVolumeLogarithmic(5 / 5);
}

module.exports.help = {
  name: "play"
}
