const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = (client, message, args) => {
if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim** ')

    const embed = new Discord.MessageEmbed()
        
        .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#88ff00")
    .setFooter(`${client.user.username}`)
         .setDescription('[Beni Davet Et](https://bit.ly/maxydavet) \n [Destek Sunucuma Katıl](https://discord.gg/Sckj4tY) \n [Oy Verme **YAKINDA**]()')
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};