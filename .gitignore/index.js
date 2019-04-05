const Discord = require('discord.js');
const fs = require('fs');

var bot = new Discord.Client();
var client = bot;
var prefix = "s.";

bot.login('NTYxODgyMTEyMTY5MzQ1MDU0.XKCrjg.vmzSQBNSUKGALPSyTNFmHyIH_Z8');

bot.on('ready', ready => {
    console.clear();
    console.log('Bot prêt');
});

bot.on('guildMemberAdd', member => {
    var new_embed = new Discord.RichEmbed();
        new_embed.setColor('#00FCED');
        new_embed.setThumbnail(member.user.displayAvatarURL)
        new_embed.setTitle(':smiley: Bienvenue ' + member.user.username)
        new_embed.setFooter('Nous sommes actuellement ' + member.guild.memberCount + ' sur le discord')
        member.guild.channels.find("name", "『💣』bienvenue").sendEmbed(new_embed);
});
