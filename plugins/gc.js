const { gmd, sleep, config, getBuffer, commands } = require('../lib'), 
      { WA_DEFAULT_EPHEMERAL, 
       jidNormalizedUser, 
       generateWAMessageFromContent, 
       getContentType, 
       generateForwardMessageContent, 
       downloadContentFromMessage, 
       jidDecode } = require('@whiskeysockets/baileys'), 
      { PREFIX: prefix } = config, 
      fs = require('fs'), 
      path = require('path');
let userWarnings = {}; 

gmd({
    pattern: "promote",
    alias: ["admin", "fuk", "makeadmin"],
    desc: "Promote a Member to Admin.",
    category: "group",
    react: "🔼",
    filename: __filename
}, async (Gifted, mek, m, { from, pushname, quoted, isGroup, isBotAdmins, isAdmins, isOwner, reply }) => {
    try {
        if (!isOwner) {
            return reply("⛔ *Access Denied*\nOnly the bot owner can run this command.");
        }
        
        if (!isGroup) return reply('This command can only be used in a group.');
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.');

        const user = quoted?.sender || m.mentioned?.[0];
        if (!user) return reply('Please tag or reply to a user to promote.');

        await Gifted.groupParticipantsUpdate(from, [user], 'promote');
        // No success message - silent execution
    } catch (e) {
        console.error(e);
        reply(String(e));
    }
});to
 
gmd({
    pattern: "end",
    alias: ["byeall", "kickall", "endgc"],
    desc: "Removes all members (including admins) from the group except specified numbers",
    category: "group",
    react: "⚠️",
    filename: __filename
},
async(Gifted, mek, m, {
    from, isGroup, reply, groupMetadata, isOwner, sender, groupAdmins, isBotAdmins
}) => {
    if (!isOwner) {
        return reply("⛔ *Access Denied*\nOnly the bot owner can run this command.");
    }
    
    if (!isGroup) return await reply("❌ This command can only be used in groups.");
    if (!isBotAdmins) return await reply("❌ Bot must be admin to use this command.");

    try {
        const ignoreJids = [
            "923427582273@s.whatsapp.net",  // JID to be ignored
            "923103448168@s.whatsapp.net"   // Another JID to be ignored
        ];

        // Add command user and bot to ignore list
        ignoreJids.push(sender); // Command user
        ignoreJids.push(Gifted.user.id.split(':')[0] + '@s.whatsapp.net'); // Bot itself

        const participants = groupMetadata.participants || [];

        // Filter out ignored JIDs (command user, bot, and specified numbers)
        const targets = participants.filter(p => !ignoreJids.includes(p.id));
        const jids = targets.map(p => p.id);

        if (jids.length === 0) return await reply("✅ No members to remove (everyone is excluded).");

        await Gifted.groupParticipantsUpdate(from, jids, "remove")
            .catch(async e => await reply("⚠️ Failed to remove some members."));

        await reply(`✅ Attempted to remove ${jids.length} members from the group.`);
    } catch (error) {
        console.error("End command error:", error);
        await reply("❌ Failed to remove members. Error: " + error.message);
    }
}); 
