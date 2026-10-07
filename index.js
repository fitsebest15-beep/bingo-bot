
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is missing");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🎱 Welcome to Bingo!\n\n/start - Start the game\n/card - Get your Bingo card"
  );
});

bot.onText(/\/card/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🎫 Your Bingo card will appear here."
  );
});

console.log("🎱 Bingo bot is running...");
