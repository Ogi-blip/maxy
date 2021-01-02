const db = require('quick.db');
const Discord = require('discord.js')

   exports.run = async(client, message, args) => {

  

    if(args[0] === "çekiliş") {
      const motion = new Discord.MessageEmbed()
    .setColor("#88ff00")
    .setTitle(`:gem: **Maxy - Çekiliş Yardım Menüsü**\n`)
    .setDescription(`
    Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.
    ║═════════════════════════════════════║
	 :white_small_square: \`m-çekiliş\` **=> Sunucuda Çekiliş Yaparsınız**
	  :white_small_square: \`m-reroll\` **=> Çekilişte Yeni Bir Kişi Seçersiniz**
    :white_small_square: \`m-çekilişdurdur \` **=> Sunucuda Devam Eden Çekilişi Durdurursunuz**
    :white_small_square: \`m-çekilişbitir\` **=> Sunucuda Devam Eden Bir Çekilişi Bitirsiniz**
    **» Linkler**
    [Bot Davet Linki](https://bit.ly/maxydavet) | [Maxy Support](https://discord.gg/Sckj4tY)
    `)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
      return message.channel.send(motion)
    }
//
if(args[0] === "davet-sistemi") {
  const motion = new Discord.MessageEmbed()
.setColor("#88ff00")
.setTitle(`:gem: **Maxy - Davet Sistemi**\n`)
.setDescription(`
Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.
║═════════════════════════════════════║
:white_small_square: \`m-davet-kanal #kanal\` **=> Davet Kanalı Ayarlarsınız**
:white_small_square: \`m-davetleri-sıfırla\` **=> Tüm Kullanıcıların Davetlerini Sıfırlarsınız**
:white_small_square: \`m-rütbe-ekle\` **=> İnsanların Kaç Davet Yapınca Ne Alıcağını Eklersiniz m-rütbe-ekle @rol davetsayı**
:white_small_square: \`m-davetlerim\` **=> Sunucuda Bulunan Toplam Davetlerinizi Görürsünüz**
:white_small_square: \`m-top\` **=> Sunucudaki En Çok Davet Yapan Kullanıcıları Görürsünüz**
:white_small_square: \`m-davet-kanal-sıfırla\` **=> Davet Kanalını Sıfırlarsınız**
**» Linkler**
[Bot Davet Linki](https://bit.ly/maxydavet) | [Maxy Support](https://discord.gg/Sckj4tY)
`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
  return message.channel.send(motion)
}

  
  if(args[0] === "moderasyon") {
       const motion = new Discord.MessageEmbed()
.setColor("#88ff00")
.setTitle(`:gem: **Maxy - Moderasyon Menüsü**\n`) 
.setDescription(`
Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.
║════════════════════════════║
▫️ \`m-ban <@kişi <sebep>\` **=> Etiketlediğiniz Kişiyi Bir Sebeple Banlarsınız.***
▫️ \`m-sil <sayı>\` **=> Belirtiğiniz Sayı Kadar Mesaj Siler.**
▫️ \`m-sa-as aç • m-sa-as kapat\` **=> Sa - As Sistemini Açar Veya Kapatırsınız.**
▫️ \`m-küfürengel • m-küfürengel #kanal • m-küfürengel hepsi • m-küfürengel kapat\`  **=> Etiketlediğiniz Kanalda Küfür Engel Sistemi Açılır.**
▫️ \`m-reklamengel • m-reklamengel #kanal(Bakımda) • m-reklamengel hepsi(Bakımda) • m-reklamengel kapat\`  **=> Etiketlediğiniz Kanalda Reklam Engel Sistemi Açılır.**
▫️ \`m-sayaç • m-sayaç ayarla • m-sayaç sıfırla\` **=> Sayaç Sistemini Ayarlarsınız.**
▫️ \`m-otorol-ayarla • m-otorol-kapat\` **=> Otorol Sistemini Ayarlarsınız.**
▫️ \`m-hgbb #kanal• m-hgbb-kapat\` **=> Hoşgeldin Görüşürüz Sistemini Ayarlarsınız.**
▫️ \`m-mod-log #kanal• m-mod-log sıfırla\` **=> Moderasyon Loglarının Tutulacağı Kanalı Ayarlarsınız.**

**» Linkler**
[Bot Davet Linki](https://bit.ly/maxydavet) | [Maxy Support](https://discord.gg/Sckj4tY)
       `)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)      
 
return message.channel.send(motion)

}
  
  if(args[0] === "kullanıcı") {
       const motion = new Discord.MessageEmbed()
.setColor("#88ff00")
.setTitle(`:gem: **Maxy - Kullanıcı Menüsü**\n`)
.setDescription(`
Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.
║═════════════════════════════════════║
:white_small_square: \`m-avatar • m-avatar @kişi\` **=> İstediğiniz Kişinin Avatarını Gösterir.**
:white_small_square: \`m-ping\` **=> Botun Pingini Gösterir.**
:white_small_square: \`m-istatistik\` **=> Botun İstatistiğini Gösterir.**
:white_small_square: \`m-uptime\` **=> Botun Ne Kadar Süredir Uptime Olduğunu Gösterir .**
:white_small_square: \`m-davet\` **=> Botu Sunucunuza Davet Edersiniz .**
**» Linkler**
[Bot Davet Linki](https://bit.ly/maxydavet) | [Maxy Support](https://discord.gg/Sckj4tY)
`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
       return message.channel.send(motion)
    }
  

const motion = new Discord.MessageEmbed()

.setColor("#88ff00")
.setTitle(`:gem: **Maxy - Yardım Menüsü**`)
.setDescription(`
Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.
║════════════════════════════║
**Maxy Bot Bilgileri;**
*Prefix : __m-__**
**Bot Ping : __${client.ws.ping}__**
║════════════════════════════║
:hammer: **Moderasyon Komutlarını Görmek İçin \`m-yardım moderasyon\` yazın.**
:bust_in_silhouette: **Kullanıcı Komutlarını Görmek İçin \`m-yardım kullanıcı\` yazın.**
:shield: **Davet Komutlarını Görmek İçin \`m-yardım davet-sistemi\` yazın.**
:clipboard: **Çekiliş Komutlarını Görmek İçin \`m-yardım çekiliş\` yazın.**
**Not:** __Botumuzu Kullanırkan @Maxy Rolunu En Üstte Tutunuz__
**Dipnot:** __m-hata-bildir komutu ile geribildirim gönderebilirsiniz__
`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)

if(!args[0]) return message.channel.send(motion)


  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: 'yardım',
    description: 'Logo Yaparsınız',
    usage: 'm-logo <yazı>'
  };