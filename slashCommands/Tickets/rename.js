const _0xe0a5b2=(function(){let _0x57fa81=!![];return function(_0x25754b,_0x14b3f7){const _0x31555a=_0x57fa81?function(){if(_0x14b3f7){const _0x581874=_0x14b3f7['apply'](_0x25754b,arguments);return _0x14b3f7=null,_0x581874;}}:function(){};return _0x57fa81=![],_0x31555a;};}()),_0x4b6402=_0xe0a5b2(this,function(){return _0x4b6402['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x4b6402)['search']('(((.+)+)+)+$');});_0x4b6402();const {SlashCommandBuilder}=require('@discordjs/builders'),Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),commands=yaml['load'](fs['readFileSync']('./commands.yml','utf8')),utils=require('../../utils.js');module['exports']={'enabled':commands['Ticket']['Rename']['Enabled'],'data':new SlashCommandBuilder()['setName']('rename')['setDescription'](commands['Ticket']['Rename']['Description'])['addStringOption'](_0x4511d4=>_0x4511d4['setName']('name')['setDescription']('name')['setRequired'](!![])),async 'execute'(_0x225c2f,_0x2a68c1){if(!_0x2a68c1['tickets']['has'](_0x225c2f['channel']['id']))return _0x225c2f['reply']({'content':config['Locale']['NotInTicketChannel'],'ephemeral':!![]});let _0x13883e=utils['checkIfUserHasSupportRoles'](_0x225c2f);if(!_0x13883e)return _0x225c2f['reply']({'content':config['Locale']['NoPermsMessage'],'ephemeral':!![]});let _0x3037fd=_0x225c2f['options']['getString']('name');_0x225c2f['channel']['setName'](''+_0x3037fd);const _0x3e5efd=new Discord['EmbedBuilder']()['setColor']('Orange')['setTitle'](config['Locale']['ticketRenameTitle'])['addFields']([{'name':'•\x20'+config['Locale']['logsExecutor'],'value':'>\x20<@!'+_0x225c2f['user']['id']+'>\x0a>\x20'+_0x225c2f['user']['username']},{'name':'•\x20'+config['Locale']['logsTicket'],'value':'>\x20<#'+_0x225c2f['channel']['id']+'>\x0a>\x20#'+_0x225c2f['channel']['name']}])['setTimestamp']()['setThumbnail'](_0x225c2f['user']['displayAvatarURL']({'format':'png','dynamic':!![],'size':0x400}))['setFooter']({'text':''+_0x225c2f['user']['username'],'iconURL':''+_0x225c2f['user']['displayAvatarURL']({'format':'png','dynamic':!![],'size':0x400})});let _0x17f941;if(!config['renameTicket']['ChannelID'])_0x17f941=_0x225c2f['guild']['channels']['cache']['get'](config['TicketSettings']['LogsChannelID']);if(config['renameTicket']['ChannelID'])_0x17f941=_0x225c2f['guild']['channels']['cache']['get'](config['renameTicket']['ChannelID']);let _0x41899d=config['Locale']['ticketRenamed']['replace'](/{newName}/g,''+_0x3037fd);const _0x335642=new Discord['EmbedBuilder']()['setColor']('Green')['setDescription'](_0x41899d);_0x225c2f['reply']({'embeds':[_0x335642]});if(_0x17f941&&config['renameTicket']['Enabled'])_0x17f941['send']({'embeds':[_0x3e5efd]});}};