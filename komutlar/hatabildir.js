const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');

exports.run = async (client, message) => {
  
  
  const db = require('quick.db');
  

  
  let args = message.content.split(' ').slice(1);
  const hata = args.slice(0).join(' ');
  if (hata.length < 1) return message.reply('Lütfen Hatayı Bildirin')
 

    message.reply('**Hatamızı En Kısa Zamanda Düzelteceğiz**');

    var hataHook = new Discord.WebhookClient("787632748315410452", "zqjyz0DG7m4AgWf-JJfacr-zyzo8Kl0UtmXBchiCP8bOgwIdj-wFr24NHB_CyVGKnZJf")
    var embed = new Discord.MessageEmbed()
    .setColor("#88ff00")
    .setTitle(`Bende Bir Hata Bulmuşlar`)
    .addField(`Bildiren Kullanıcı`, message.author.tag)
    .addField(`Bildirilen Sunucu`, message.guild.name)
    .addField(`Bildirilen Hata`, hata)
    hataHook.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hata', 'bug', 'bug-bildir'],
  permLevel: 0,
    kategori: "bot",

};

exports.help = {
  name: 'hata-bildir',
  description: 'Bottaki bir hatayı bildirmenizi sağlar.',
  usage: 'hata-bildir',
 
};
