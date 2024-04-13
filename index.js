const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('起動しました。');
});

client.on('messageCreate', message => {
    // メッセージがボット自身のものか、うんが含まれているか確認
    if (message.author.bot) return;
    if (!message.content.includes('うん')) return;

    // メッセージが "うん" と完全一致する場合のみ反応する
    if (message.content.trim() === 'うん') {
        // 30%の確率で「ち」または「こ」を返す
        if (Math.random() < 0.3) {
            const response = Math.random() < 0.5 ? 'ち' : 'こ';
            message.channel.send(response);
        }
    }
});

//ここにBOTトークンを入れる
client.login('BOT_TOKEN');
