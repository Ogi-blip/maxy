const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')	
const sure = 2.5
const beklememesaji = `**Bu Komutu Kullanabilmek İçin \`${sure}\` Saniye Kadar Beklemelisin!!**` //Komut bekleme mesaj?
const sahipbeklemesi = true //Sahip bekleme ayar? (false=kapal?, true=aç?k)
let yazma = new Set();
//botu kasall?n?
module.exports = async message => {

const args = message.content
    .slice(ayarlar.prefix.length)
    .trim()
    .split(/ +/g);  
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = args.shift().toLowerCase();
if (command.length === 0) return;
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
    if (yazma.has(message.author.id)) {
      return message.channel.send(beklememesaji);
    }
  } else if (client.aliases.has(command)) {
    if (yazma.has(message.author.id)) {
      return message.channel.send(beklememesaji);
    }
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    let karaliste = db.fetch(`kliste.${message.author.id}`);
   const aa = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hata!')
    .setDescription('Şuan Botun Karalistesinde Bulunmaktasın Açtırmak İçin [Destek Sunucuma Gel](https://discord.gg/4nAAmUDXhS)')
    .addField('Kara listeye alınma sebebin', karaliste)
   if(karaliste) return message.channel.send(aa)

	  let data = await db.fetch(`botkomut.${message.guild.id}`) 
if(data && message.channel.id !== data) {
  
message.channel.send("❌ Beni kullanmak için lütfen <#"+data+"> kanalına git.").then(evin => evin.delete({timeout: 6000}))  
  
return  
}
    let botbakım = db.fetch('dreamcode.botbakim')
    let bakımyüzde = db.fetch('bakimyüzde')
    let bakımsebep = db.fetch('bakimsebep')
    let cfxtime = await db.fetch(`afk_süre}`);
    let cfxs = ms(Date.now() - cfxtime);
        if(!ayarlar.sahip.includes(message.author.id)) {
  if(botbakım == 'aktif'){
    let bakim = new Discord.MessageEmbed()
    .setTitle('BOT BAKIMDA')
    .setColor(`PURPLE`)
    .setDescription(`Tahmini bitiş: **${bakımyüzde}**\nBakım sebebi: **${bakımsebep}**`)
    .setFooter('Eğer uzun süre açılmazsa yapımcıma başvurunuz!')
    
    return message.channel.send(bakim)
  } 
    }
    if(cmd.help.name !== "cevaplama") {
     let kanalengel = await db.fetch(`kanalengel_${message.guild.id}`);
      if(kanalengel) {
     if(kanalengel && kanalengel.some(kanalid => `k${message.channel.id}` === kanalid)) return;
      }
 }
    if (perms < cmd.conf.permLevel) return;
    if(sahipbeklemesi === false) {
      yazma.add(message.author.id);
    } if(sahipbeklemesi === true) {
      if(message.author.id === ayarlar.sahip) {
        cmd.run(client, message, params, perms);
        return true;
      }
    }
    setTimeout(() => {
      if(yazma.has(message.author.id)) {
        yazma.delete(message.author.id);
      }
    }, sure * 1000);
    cmd.run(client, message, params, perms);
  }


};
