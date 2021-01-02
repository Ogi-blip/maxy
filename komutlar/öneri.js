const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');

exports.run = async (client, message) => {
  
  
  const db = require('quick.db');
  

  
  let args = message.content.split(' ').slice(1);
  const hata = args.slice(0).join(' ');
  if (hata.length < 1) return message.reply('Lütfen Öneriyi Yazınız')
 

    message.reply('**Öneriniz Bildirildi**');

    var hataHook = new Discord.WebhookClient("787633958565183498", "TQa-4zGNp9PQMKxRO5q8GT9B6m--j6PiyRuPH5bpp6zp9A_uVDMXYc0bRS9njOtrrS6c")
    var embed = new Discord.MessageEmbed()
    .setColor("#88ff00")
    .setTitle(`Bir Kullanıcıdan Öneri Var`)
    .addField(`Bildiren Kullanıcı`, message.author.tag)
	addField(`Bildiren Kullanıcı İd Si`, message.author.id)
    .addField(`Bildirilen Sunucu`, message.guild.name)
    .addField(`Bildirilen Hata`, hata)
    hataHook.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öneri'],
  permLevel: 0,
    kategori: "bot",

};

exports.help = {
  name: 'öneri-yap',
  description: 'Bottaki bir hatayı bildirmenizi sağlar.',
  usage: 'öneri-yap',
 
};
