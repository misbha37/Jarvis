const { Sequelize } = require('sequelize');
const { loadEnv } = require("jarvis-md");
const fs = require('fs');

if (fs.existsSync('config.env')) {
  loadEnv('config.env');
};

global.api = 'https://enthusiastic-ag-lokiking-524102b4.koyeb.app/';

const toBool = (x) => (x && (x.toLowerCase() === 'true' || x.toLowerCase() === 'on')) || false;
const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  VERSION: require('./package.json').version,
  BAN_CHATS: process.env.BAN_CHATS || "Jarvis_xx01_6uvv_3wuu_0451_wx23_3u68_w5xz_v721",
  PORT: process.env.PORT || 8000,
  PM_BLOCKER: toBool(process.env.PM_BLOCKER || "false"),
  PM_BLOCKER_MSG: process.env.PM_BLOCKER_MSG || "```Pm blocker active on this chat!!```",
  AUDIO_DATA: process.env.AUDIO_DATA || 'ʟᴏᴋɪ-xᴇʀ;ᴊᴀʀᴠɪꜱ;https://graph.org/file/58ea74675af7836579a3a.jpg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '_Group automuted!_',
  AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '_Group autounmuted!_',
  ANTILINK_MSG: process.env.ANTILINK_MSG || "```Link Not allowed in this group!!```",
  ANTIBOT_MSG: process.env.ANTIBOT_MSG || "```Antibot deleted successfully!!```",
  ANTIWORD_MSG: process.env.ANTIWORD_MSG || "```Antiword deleted successfully!!```",
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  SESSION_ID: process.env.SESSION_ID || '',
  LANG: (process.env.LANGUAGE || 'EN').toLowerCase(),
  SETVV: process.env.SETVV || 'DM',
  ELEVENLABS: process.env.ELEVENLABS || "sk_c7a40b212be5570d6f554646775093fff80c7cae637bdc94",
  HANDLERS: (process.env.HANDLERS || process.env.HANDLER || process.env.PREFIX || "^[.,!]").trim(),
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  LINKPREVIEW: toBool(process.env.LINKPREVIEW || "false"),
  CONTEXTINFO: process.env.CONTEXTINFO || `{"title": "ᴊᴀʀᴠɪꜱ-ᴍᴅ", "body": "ᴀᴡᴇꜱᴏᴍᴇ 🍉", "thumbnailUrl": "https://i.imgur.com/OWJc4Qx.jpeg", "renderLargerThumbnail": false, "mediaType": 1, "mediaUrl": "", "sourceUrl": "https://github.com/Loki-Xer/Jarvis", "showAdAttribution": true}`,
  RAILWAY_API: process.env.RAILWAY_API || process.env.RAILWAY_API_KEY,
  KOYEB_API: process.env.KOYEB_API || process.env.KOYEB_API_KEY,
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || process.env.KOYEB_NAME,
  RENDER_API: process.env.RENDER_API || process.env.RENDER_API_KEY,
  RENDER_APP_NAME: process.env.RENDER_APP_NAME || process.env.RENDER_NAME,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot7521556330:AAFY6fX7r_IzwWdymiLoOUGW5tJCikyfkAM",
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'ᴊᴀʀᴠɪꜱ;ᴡᴀʙᴏᴛ',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK || "false"),
  SAVE_STATUS: toBool(process.env.SAVE_STATUS || "false"),
  STATUS_VIEW: process.env.STATUS_VIEW || "false",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "false"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;ᴊᴀʀᴠɪꜱ-ᴍᴅ;https://graph.org/file/58ea74675af7836579a3a.jpg',
  MENU_FONT: process.env.MENU_FONT || "0;0",
  SUDO: process.env.SUDO || '',
  STATUS_REPLY: toBool(process.env.STATUS_REPLY || "false"),
  AUTH_FILE: process.env.AUTH_FILE,
  STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*Nice Status Brother 🦫✨*",
  KICK_BLOCK: toBool(process.env.KICK_BLOCK || "false"),
  CMD_REACTION: toBool(process.env.CMD_REACTION || 'false'),
  TIMEZONE: process.env.TIMEZONE || "Asia/Kolkata",
  STARTING_MSG: toBool(process.env.STARTING_MSG || "true"),
  STATUS_REACTION_EMOJI: process.env.STATUS_REACTION_EMOJI || "🍉,🍓",
  STATUS_REACTION: toBool(process.env.STATUS_REACTION || "false"),
  GEMINI: process.env.GEMINI || "null",
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || 'ᴊᴀʀᴠɪꜱ;ʟᴏᴋɪ-xᴇʀ;https://graph.org/file/1506e5842805b0968c5cf.mp4',
  WORK_TYPE: process.env.WORK_TYPE || process.env.MODE || 'private',
  NSFW: toBool(process.env.NSFW || "false"),
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
