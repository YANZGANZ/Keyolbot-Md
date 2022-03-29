/*
   * Create By Riych Dwayne
   * Contact Me on wa.me/6281575886399
   * Follow https://github.com/riychuhuy
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	riykey: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bac6820f7f', // masukin apikey disini
}

// Owner
global.owner = ['48729759866','48699532476','48729759866']
global.ownernomer = '48729759866'
global.premium = ['48729759866']
global.ownername = '𝒀𝑨𝑵𝒁 Keren'
global.botname = '𝒀𝑨𝑵𝒁bot-Md'
global.footer = '𝒀𝑨𝑵𝒁bot-Md'
global.email = 'selawikwok@gmail.com'
global.ig = 'https://instagram.com/ariff4you_'
global.region = 'Planet China'

// Keperluan buttons
global.myweb = 'https://api-riych.herokuapp.com/'
global.sc = 'Buy ke gw/di yt bnyak🗿👌'

// Wm
global.packname = 'Keyolbot-Md'
global.author = 'WhatsApp Bot Multi-Device'

// Thumb & Image random
global.thumb = fs.readFileSync('./image/keyol.jpg')
global.pp_video = fs.readFileSync('./image/keyol.mp4')

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    endGLimit: 'Limit Harian Game Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitharian = "15"
global.limitgame = "15"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
