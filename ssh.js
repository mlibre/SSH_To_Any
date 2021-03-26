const telegraf = require('telegraf');
const {exec} = require('child_process');
let cron = require('node-cron');
const find = require('find-process');
const uname = require('username');
let delay = require('delay');
let sec = require('./sec.json');

let Token = sec.botToken; // Your Bot Token
let chat_id = sec.telegramChannelID; // Channel ID Or Username

let every = 1;
let username = null;
let kill_tmate_urx;
let tmate_start_command;
let tmate_session_address_command;
async function setDynamicConfig()
{
	username = await uname();
	kill_tmate_urx = 'killall tmate -9; killall urxvt -9';
	tmate_start_command = `urxvt -e bash -c "tmate -L ${username}"`;
	tmate_session_address_command = `tmate -S /tmp/tmate-1000/${username} show-messages`;
}
setDynamicConfig();

async function killandrun()
{
	// console.log('KillandRun');
	if(username == null)
	{
		await setDynamicConfig();
	}
	exec(kill_tmate_urx , function (err, out, stderr)
	{
		// console.log(err, out, stderr);
		// console.log('Done kill_tmate_urx');
		exec(tmate_start_command , function (err, out, stderr)
		{
			// console.log(err, out, stderr);
			console.log('Done tmate_start_command');
		});
	});
	await delay(2000);
	exec(tmate_session_address_command , function (err, out, stderr)
	{
		// console.log(err, out, stderr);
		// console.log('Done tmate_session_address_command');
		bot.telegram.sendMessage(chat_id, username);
		bot.telegram.sendMessage(chat_id, out || "Turned Off");
	});
}
try {
	killandrun();
} catch (error) {
	console.log(error);
}

let bot = new telegraf(Token);
bot.start(function (res)
{
	res.reply('Hey');
});
bot.help(function (res)
{
	res.reply('Send me a sticker');
});
bot.on('sticker', function (res)
{
	res.reply('IIIIIIIIII');
});
bot.hears('hi', function (res)
{
	res.reply('hears');
});
bot.launch();


console.log(`Running Every ${every} min`);
cron.schedule(`*/${every} * * * *`, async function pc()
{
	find('name' , 'urxvt', true)
	.then(function (list)
	{
		// console.log(list);
		// console.log(list.length);
		if(list.length == 0)
		{
			killandrun();
		}
	})
	exec(tmate_session_address_command , function (err, out, stderr)
	{
		// console.log(err, out, stderr);
		bot.telegram.sendMessage(chat_id, username);
		bot.telegram.sendMessage(chat_id, out || "Turned Off");
	});
});