let handler = async (m, { text, usedPrefix }) => {
    let salah = `Bukan gitu\nList penggunaan *gunting,batu,kertas*\nContoh *.suit batu*`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nZ U L - B O T Z: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.DATABASE._data.users[m.sender].money += 5000
            m.reply(`Kamu menang! +5000 Money\nKamu: ${text}\nZ U L - B O T Z: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nZ U L - B O T Z: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.DATABASE._data.users[m.sender].money += 5000
            m.reply(`Kamu menang! +5000 Money\nKamu: ${text}\nZ U L - B O T Z: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nZ U L - B O T Z: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.DATABASE._data.users[m.sender].money += 5000
            m.reply(`Kamu menang! +5000 Money\nKamu: ${text}\nZUL - B O T Z: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nZUL - B O T Z: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.register = false
handler.limit = false

module.exports = handler
