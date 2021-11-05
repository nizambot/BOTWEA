const fetch = require('node-fetch')
const { MessageType,Presence } = require('@adiwajshing/baileys')
const { sticker } = require('./lib/sticker')
let util = require('util')
let simple = require('./lib/simple')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.as)) user.as = 0
            if (!isNumber(user.level)) user.level = 0
            if (!user.role) user.role = 'Beginner'
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.limit)) user.limit = 100
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
            if (!isNumber(user.money)) user.money = 0
            
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0

            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.warning)) user.warning = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.pet)) user.pet = 0
        
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0

            if (!'Banneduser' in user) user.Banneduser = false
            if (!'BannedReason' in user) user.BannedReason = ''
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
        
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.antispam)) user.antispam = 0
            if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.string)) user.string = 0
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmontly = 0
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
            }
            
//BERBURU DATABASE GAME
			if (!isNumber(user.paus)) user.paus = 0
     if (!isNumber(user.kepiting)) user.kepiting = 0
     if (!isNumber(user.gurita)) user.gurita = 0
     if (!isNumber(user.cumi)) user.cumi= 0
     if (!isNumber(user.buntal)) user.buntal = 0
     if (!isNumber(user.dory)) user.dory = 0
     if (!isNumber(user.lumba)) user.lumba = 0
     if (!isNumber(user.lobster)) user.lobster = 0
     if (!isNumber(user.hiu)) user.hiu = 0
     if (!isNumber(user.udang)) user.udang = 0
     if (!isNumber(user.ikan)) user.ikan = 0
     if (!isNumber(user.orca)) user.orca = 0
        
        if (!isNumber(user.banteng)) user.banteng = 0
     if (!isNumber(user.harimau)) user.harimau = 0
     if (!isNumber(user.gajah)) user.gajah = 0
     if (!isNumber(user.kambing)) user.kambing = 0
     if (!isNumber(user.panda)) user.panda = 0
     if (!isNumber(user.buaya)) user.buaya = 0
     if (!isNumber(user.kerbau)) user.kerbau = 0
     if (!isNumber(user.sapi)) user.sapi = 0
     if (!isNumber(user.monyet)) user.monyet = 0
     if (!isNumber(user.babihutan)) user.babihutan = 0
     if (!isNumber(user.babi)) user.babi = 0
     if (!isNumber(user.ayam)) user.ayam = 0
     
     
            if (!('autolevelup' in user)) user.autolevelup = true
            
         /*   if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
               
            }*/
   /*         if (!('autolevelup' in user)) user.autolevelup = false */
        } else global.DATABASE._data.users[m.sender] = {
            healt: 100,
            level: 0,
            role: 'Beginner',
            exp: 0,
            limit: 10,
            lastclaim: 0,
            lastIstigfar: 0,
                 as: 0,
    paus: 0,
    kepiting: 0,
    gurita: 0,
    cumi: 0,
    buntal: 0,
    dory: 0,
    lumba: 0,
    lobster: 0,
    hiu: 0,
    udang: 0,
    ikan: 0,
    orca: 0,
    banteng: 0,
    harimau: 0,
    gajah: 0,
    kambing: 0,
    panda: 0,
    buaya: 0,
    kerbau : 0,
    sapi: 0,
    monyet : 0,
    babihutan: 0,
    babi: 0,
    ayam: 0,
            money: 0,
            diamond: 0,
            iron: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            pet: 0,
            potion: 0,
            sampah: 0,
            armor: 0,
            kucing: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            Banneduser: false,
            BannedReason: '',
            warn: 0,
            afk: -1,
            afkReason: '',
            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            kayu: 0,
            batu: 0,
            string: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastmining: 0,
            lasthunt: 0,
            lastweekly: 0,
            lastmonthly: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            warning: 0,
            autolevelup: true,
        }

        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = true
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('delete' in chat)) chat.delete = false
         if (!('nobadword' in chat)) chat.nobadword = false
        if (!('nojakarta' in chat)) chat.nojakarta= false
        if (!('nolink' in chat)) chat.nolink = false
        if (!('novirtex' in chat)) chat.novirtex = false
        if (!('nolinkyt' in chat)) chat.nolinkyt = false
        if (!('nolinktiktok' in chat)) chat.nolinktiktok = false
        if (!('nohoax' in chat)) chat.nohoax = false
        if (!('nohentai' in chat)) chat.nohentai = false
        if (!('nobucin' in chat)) chat.nobucin = false
        if (!('nokuotafree' in chat)) chat.nokuotafree = false
        if (!('noemotebatu' in chat)) chat.noemotebatu = false
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: true,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: true,
          nobadword: false,
        nolink: false,
        novirtex: false,
        nohentai: false,
        nohoax: false,
        nobucin: false,
        nospam: false,
        nokuotafree: false,
        nojakarta: false,
        noemotebatu: false,
        }
       let settings = global.DATABASE._data.settings
        if (typeof settings !== 'object') global.DATABASE._data.settings = {}
        if (settings) {
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = true
          if (!'backup' in settings) settings.backup = false
          if (!isNumber(settings.backupDATABASE)) settings.backupDATABASE = 0
        } else global.DATABASE._data.settings = {
          antispam: true,
          antitroli: true,
          backup: false,
          backupDB: 0
        }
      } catch (e) {
        console.error(e)
      }

	//Done
	
	
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (m.chat == 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      conn.chatRead(m.chat)
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
//      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let enable = global.DATABASE._data.chats[m.chat]
	
      // Spesialis Anti
      
	//ANTILINK
	if(enable.nolink && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
		if (!m.fromMe && m.text.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            conn.updatePresence(m.chat, Presence.composing) 
			 conn.reply(m.chat, `*Sorry, you got kicked, for sending the group link!!!*`, m).then(() => {
			conn.groupRemove(m.chat, [m.sender])
			 })
        }
     }
	if(enable.nolinkyt && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
		if (!m.fromMe && m.text.match(/(https:\/\/youtu.be)/gi)) {
            conn.updatePresence(m.chat, Presence.composing) 
			 conn.reply(m.chat, `*Sorry, you got kicked, for sending the youtube link!!!*`, m).then(() => {
			conn.groupRemove(m.chat, [m.sender])
			 })
        }
     }
	if(enable.nolinktiktok && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
		if (!m.fromMe && m.text.match(/(https:\/\/vt.tiktok.com)/gi)) {
            conn.updatePresence(m.chat, Presence.composing) 
			 conn.reply(m.chat, `*Sorry, you got kicked, for sending the tiktok link!!!*`, m).then(() => {
			conn.groupRemove(m.chat, [m.sender])
			 })
        }
     }
     if(enable.nohoax && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
         if(m.text.match(/(kirim ke 4 grup|kirim ke 5 grup|maka namamu akan muncul|njir nama gw muncul|jika sudah kirim ke grupmu|lalu kirim ke grupmu|maka otomatis akan muncul|jika sudah cari gambar|namamu akan muncul)/gi)) {
         conn.updatePresence(m.chat, Presence.composing)
         conn.reply(m.chat, `Sorry karna kamu telah ngirim pesan gak guna gitu kamu otomatis di kick!!!`, m).then(() => {
         conn.groupRemove(m.chat, [m.sender])
         })
       }
     }
     if(enable.nokuotafree && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
       if(m.text.match(/(kuotagratis.on|kuotabelajar.on|Program kuota belajar|=75G|Bantuan pulsa|kolah.on|kuotagratis.co|v=75GB|kuotafree.on|lajar.on|kuotakemendikbud.)/gi)) {
       conn.updatePresence(m.chat, Presence.composing)
       conn.reply(m.chat, `*_Yang share kuota gratis jangan di temenin, kick aja langsung!!!_*`, m).then(() => {
       conn.groupRemove(m.chat, [m.sender])
        })
      }
    }
     if(enable.nowan && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
       if(m.text.match(/(Wan|wanz)/gi)) {
       conn.updatePresence(m.chat, Presence.composing)
       conn.reply(m.chat, `*_Yang nge-Fans sama wan jangan di temenin, kick aja langsung!!!_*`, m).then(() => {
       conn.groupRemove(m.chat, [m.sender])
        })
      }
    }
    
	if(enable.noemotebatu && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(emote batu|🗿)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Hamdeh Sorry Kawand!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTIEMOTEBATU DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan menggunakan emote batu atau menggunakan kalimat (emote batu) sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\nGunakan command *.maaf* untuk menghapus 1 warning\n\n ▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
		if(enable.nobucin && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(beb|Beb|yank|yang|sayang|syg|syang|beby|baby|Yang|Sayang|Syg|Beby|by|By|Baby|😍|😘|🥰|😗|😙|😚|😻)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Kabanyakan bucin, kick aja lah!!!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTIBUCIN DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan Bucin karna admin iri, kalo mau bucin chat aja, kalo ngebucin sebanyak 10x kamu akan dikeluarkan dari grup secara otomatis.*\n\nGunakan command *.maaf* untuk menghapus 1 warning\n\n ▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if (!m.fromMe && m.text.match(/(62857121256952)/gi)) {
stiker = await sticker(false, "https://telegra.ph/file/dfee29786ff4c524443c2.png", "PSYCO×BOT", "Ngetag lagi saya bened")
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, { sendEphemeral: true, quoted: m })
	}
	
	if (!m.fromMe && m.text.match(/(6289528232401)/gi)) {
stiker = await sticker(false, "https://telegra.ph/file/c9f9af78f667c3e5210ac.png", "OWNER PSYCO BOT", "Jangan tag kalau ga mau di benet")
	await conn.sendMessage(m.chat, stiker, MessageType.sticker, { sendEphemeral: true, quoted: m })
	}
	
	if(enable.nojakarta && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(Lu|lu|gw|Gw|Gue|Gua|gue|gua)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Hamdeh Sorry Kawand!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTI-JAKARTA DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan menggunakan bahasa Jakarta atau menggunakan kalimat lu/gw sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\nGunakan command *.maaf* untuk menghapus 1 warning\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if(enable.nosad && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(🙂|😭|🙃)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 4) {
				conn.reply(m.chat, `*Hamdeh Sorry Kawand!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTI-SAD DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 5 ]*\n\n*Jangan kirim emoji sad sebanyak 5x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\nGunakan command *.maaf* untuk menghapus 1 warning\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
		if(enable.nobadword && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(asadebangsat|Dakjal|anak setan|ngntd|ngentot|jancuk|kuntul|babi|kampang|kenthu|tempik|kimak|patek|kondom|bugil|seks|sex|sexy|jancok|jembut|bokep|xnxx|xxx|xvideos|xvid|jilboob|seksi|Anjing|Babi|Kunyuk|Bajingan|Bangsat|Kampret|Kontol|Memek|Ngentot|Pentil|Perek|Pepek|Pecun|Bencong|Banci|Maho|Sinting|Lonte|Hencet|Taptei|Kampang|Keparat|Bejad|Gembel|Brengsek|Taek|Anjrit|Fuck|Tetek|Ngulum|Anj|ajg|asu|aswJembut|Totong|Kolop|Pukimak|Bodat|Heang|Jancuk|Burit|Titit|Nenen|Bejat|Silit|komtol|Komtol|Sempak|Fucking|Asshole|Bitch|Penis|Vagina|Klitoris|Kelentit|Borjong|Dancuk|Pantek|kondom|Teho|Bejat|Pantat|Bagudung|Babami|Kanciang|Bungul|Idiot|Kimak|Henceut|Kacuk|pukimak|Pussy|ngewe|Dick|Damn|Assu|tempek|celeng|shit|jingan|ngentot anjing ngewe|Dont use unlisted command,BAKA!breast|kontol|ngentod|colmek|alat vital|bangkinang|tits|tetek|coli|ngocok peli|ANJING!!!|kntl|ngtd|anying|amjin|sikontol|bang bros|ngocok|toket|A n j i n g|Tahi|anjass|biadap|bbii|biadab|Tomlol|dongo|dungu|anjk|bcot|BURUNG KECIL JAN SOK KERAS:V|nude|p3n1s|p3nis)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender]. warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Over badword!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTITOXIC DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan berkata kasar atau menggunakan kalimat sampah sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\nGunakan command *.astagfirullah* untuk menghapus 1 warning\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}

	if(enable.novirtex && !m.fromMe && m.isGroup && !isOwner && isBotAdmin) {
            if (!m.fromMe && m.text.match(/(৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
            	conn.reply(m.chat, `*Jangan kirim pirtek asu!!!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender]) 	
			})
        }
	}
	
		
	if(enable.nohentai && !m.fromMe && m.isGroup && isBotAdmin) {
            if (m.text.match(/(https:\/\/nhentai.net\/\/g|nhentai.net\/\/g)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Bad request!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ HENTAI DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan Kirim kode hentai sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\nGunakan command *.maaf* untuk menghapus 1 warning\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if(enable.nobomchat && !m.fromMe && m.isGroup && isBotAdmin) {
            if (m.text.match(/(Selamat datang di papan klip, kapan pun Anda menyalin akan disimpan di sini|Selamat datang di papan klip, kapan pun Anda menyalin akan disimpan di siniSelamat datang di papan klip, kapan pun Anda menyalin akan disimpan di siniGeser klip untuk menghapusnya)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Over Bomchat!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ BOMCHAT DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan Bomchat sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
if (!m.fromMe && m.text.match(/(terimakasih|makasih|tq|thanks|tengs|tengkyu|mks|mksih)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/makasih.opus', 'tts.opus', null, m, true)
	}
	
if (!m.fromMe && m.text.match(/(asalamualaikum|assalamu'alaikum|assalamualaikum)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/wall.opus', 'tts.opus', null, m, true)
	}
	
if (!m.fromMe && m.text.match(/(hai|hallo|halo)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/hai.opus', 'tts.opus', null, m, true)
	}
	
if (!m.fromMe && m.text.match(/(efef|fri fayer|freefire|epep|drama)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/efef.opus', 'tts.opus', null, m, true)
	}
	
	
	// done
      let DevMode = (global.DeveloperMode.toLowerCase() == 'true') || false
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.Banneduser) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }

          m.isCommand = true         
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
            continue // Limit habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
            DevMode,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), 'PsycoBOTZ')
                if (DevMode && text.length > 100) {
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))  m.reply(`*file:* ${m.plugin}\n*Nomor:* ${m.sender}\n*Text:* ${m.text}\n\n\`\`\`${text}\`\`\``, jid)
                }
                m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
          }
          break
        }
      }
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
     if (opts['autoread']) await conn.chatRead(m.chat).catch(() => {})
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            let pp = './src/pps.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
              this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.remoteJid == 'status@broadcast') return
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan

Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
    async onCall(json) {
        let { from } = json[2][0][1]
        let users = global.DATABASE.data.users
        let user = users[from] || {}
        if (user.whitelist) return
        switch (this.callWhitelistMode) {
            case 'mycontact':
                if (from in this.contacts && 'short' in this.contacts[from])
                    return
                break
        }
        //await this.blockUser(from, 'add')
    }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'Nanti aja bang...',
    owner: 'Fitur khusus owner...',
    mods: 'Fitur hanya untuk moderator/owner...',
    premium: 'Hanya user *premium* yang bisa menggunakan fitur ini\nMau daftar premium? ketik *.goprem*',
    group: 'Harus didalam grup sayang',
    private: 'Chat pribadi aja sayang',
    admin: 'Jadi admin dulu, baru bisa pake fitur ini sayang',
    botAdmin: 'Jadiin bot admin sayang, kan mau pake fitur ini',
    nsfw: 'Mode NSFW tidak aktif. Hanya pemilik bot yang bisa mengaktifkannya'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
