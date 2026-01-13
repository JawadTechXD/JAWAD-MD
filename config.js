
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUy46jRhT9lai2toaHjbGRWhqMMWCMXxi/olmUobDL2ICrCjAe9SKbfEA0UmfTSrKJ8l35gv6ECHd3ehbJpINYwK3Suefec+79DOIEU2SjEiifQUpwDhmqPlmZIqCAbhaGiIA6CCCDQAF+10gv/mW3P8/XtEzbJAmmRBbtZkuK0bIGR6vD4lx4C91w7sB9HaTZ9oj9bwAezNS+EI76m2TITF0al0Qws9n1YvbnuJMyR1bz1OW2l4V3B+4rRIgJjnd6ukcnRODRRuUEYvI++k19wZFlV2wNF8w6DxfC4mhumdvVh27/0p7rk2WtFpbr9ohvv4++wfUOq2Tt8mnhtneZ41/zsAhUcVSuFpu0nKjnaB3ORXPDT5/pU7yLUWAFKGaYle/uO3WSpWbzGUMn3bSXA4FMu4UUc3msyhN7dOUOy1Yyt2PDLN5HXHbdJrdcabPeJKUbg7NGON/g/sGV7WK6yo1DRzq3Ol7HLdpfE5+QV69E/6fvvsWyzWiiXaP5dbk3uEw98S3Ew8SiwuDqRZe05mSqahwW9H30e6O0rEm9UyQGnLcddE5lup1m16GOzbIwaatsZPPxOGsIq/Ubfcgy8i2W0bLv5X4ha7JxzfKxsylYZz0IZ2bIhVa4PjnbdkPK5QEejA8DrmAJ3Z3zvT5PqCVwso3WdMSVe2PXLaJZNIpmcJxqB/XuVlGESisAinBfBwTtMGUEMpzEtxgv1gEMchf5BLFbe4E6yTNhbi2nbrz3zc1AwrPGWNZbizKmOqwxYTczRUO/sr1zB+ogJYmPKEWBiSlLSOkgSuEOUaB8/6kOYnRhz8JV6RpCHYSYUObFWXpMYPCq6ush9P0ki5lbxr5WfSACFP4tjBjD8Y5WfcxiSPw9zpG2h4wCJYRHiv6uEBEUAIWRDP09tVoSVI13ej1jLasSqIPTTRAcAAV0xEaDb0sdXhYlRfxIPxQVKkzTDzFioA6Ot1ui1G7KQltqNESxIbUV8WMVr4MYVlDg6Zefvvz55Ye39+cfnx4ffn96fPjy9Pjw8N3T48OvT48Pfzw9PvxWBaqDSp+X6ioyAWIQHylQgGYN6S7n+/rI1AvHMwxV36naTgVv3Xi11bNsU80i3vk4dPjLsmaGsXyMgtr4uo8PkPfcIeNMlwVs3ZmerLt/AKkWSqBqftnZOLLcmvmH0YHkx2zYOBWbrejM4pl9tE6rwwLn+bAT2VYCsUf0wR6yzmLVGYomH6CxRnxDM88GLfQo96aROr2rsgUoxz76Olk49eSBVRx0v+ymc2F63jdWQs88k+bADOcRO/Gife1S3lmzMpW8Le9xkYVifj4Xl20rtJZ9zVldan0RX72CHa2ElJNd8Wz428AdXxYdvlmx0rn6DTG67Y0Xyf5L92felTv5+/pXEC+L6F+Gueup2Bbs1L2OnEW+b0g1aWOGB9rcNEXW17EcXniy2i4n3gCD+/tPdZAeIQsTcgIKgHFAkputSJJVdrfiMPlGMk21rN70ufAjpEx9G6E5PiHK4CkFiiBLrYbckNrt51sTkqQmpHugAMFu7s1mNQ+lmqYug+x1IoFaPbo5Bfd/AaMTYT2tBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By SAD MUNDA", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "JawadTech", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "JAWAD-MD", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/pf270b.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am jawad md",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
