const _0x433470=(function(){let _0x381309=!![];return function(_0x499585,_0x32f155){const _0x2d6dae=_0x381309?function(){if(_0x32f155){const _0x131b4a=_0x32f155['apply'](_0x499585,arguments);return _0x32f155=null,_0x131b4a;}}:function(){};return _0x381309=![],_0x2d6dae;};}()),_0x3ca4b7=_0x433470(this,function(){return _0x3ca4b7['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x3ca4b7)['search']('(((.+)+)+)+$');});_0x3ca4b7();const {Discord,EmbedBuilder}=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),color=require('ansi-colors'),utils=require('../utils.js');module['exports']=async(_0xc09917,_0x108072)=>{if(!_0x108072['channel']['type']==='GUILD_TEXT')return;if(_0xc09917['tickets']['has'](_0x108072['channel']['id'])&&_0x108072['type']===0x6)_0x108072['delete']()['catch'](_0x14c139=>{});if(_0x108072['author']['bot'])return;config['CommandsEnabled']&&config['CustomCommands']['forEach'](_0x3fd929=>{let _0x105718=_0x108072['content']['split']('\x20'),_0x22bd46=_0x105718[0x0]['toLowerCase']();_0x105718['slice'](0x1);let _0x32550b=_0x22bd46['slice'](config['CommandsPrefix']['length']);if(_0x108072['content']['startsWith'](config['CommandsPrefix'])&&_0x32550b===_0x3fd929['command']){if(config['OnlyInTickets']&&!_0xc09917['tickets']['has'](_0x108072['channel']['id']))return;let _0x55477f='\x0a\x0a['+new Date()['toLocaleString']()+']\x20[CUSTOM\x20COMMAND]\x20Command:\x20'+_0x3fd929['command']+',\x20User:\x20'+_0x108072['author']['username'];fs['appendFile']('./logs.txt',_0x55477f,_0x574eb9=>{if(_0x574eb9)console['log'](_0x574eb9);});if(config['LogCommands'])console['log'](''+color['yellow']('[CUSTOM\x20COMMAND]\x20'+color['cyan'](''+_0x108072['author']['username'])+'\x20used\x20'+color['cyan'](''+config['CommandsPrefix']+_0x3fd929['command'])));let _0x40a812=new EmbedBuilder()['setColor'](config['EmbedColors'])['setDescription'](''+_0x3fd929['response']);if(_0x3fd929['deleteMsg'])setTimeout(()=>_0x108072['delete'](),0x64);if(_0x3fd929['replyToUser']&&_0x3fd929['Embed'])_0x108072['reply']({'embeds':[_0x40a812]});if(_0x3fd929['replyToUser']===![]&&_0x3fd929['Embed'])_0x108072['channel']['send']({'embeds':[_0x40a812]});if(_0x3fd929['replyToUser']&&_0x3fd929['Embed']===![])_0x108072['reply']({'content':''+_0x3fd929['response']});if(_0x3fd929['replyToUser']===![]&&_0x3fd929['Embed']===![])_0x108072['channel']['send']({'content':''+_0x3fd929['response']});}});if(_0xc09917['tickets']['has'](_0x108072['channel']['id'])){_0xc09917['tickets']['inc'](_0x108072['channel']['id'],'messages'),_0xc09917['globalStats']['inc'](_0x108072['guild']['id'],'totalMessages'),_0xc09917['tickets']['set'](_0x108072['channel']['id'],Date['now'](),'lastMessageSent');if(config['TicketAlert']['Enabled']){const _0x357e50=_0xc09917['tickets']['filter'](_0xf0b2f1=>_0xf0b2f1['closeNotificationTime']);_0x357e50['forEach'](async _0x24ecec=>{if(!_0x24ecec)return;if(!_0x24ecec['channelID'])return;_0x24ecec['channelID']===_0x108072['channel']['id']&&(await _0xc09917['tickets']['set'](_0x108072['channel']['id'],0x0,'closeNotificationTime'),await _0x108072['channel']['messages']['fetch'](_0xc09917['tickets']['get'](''+_0x108072['channel']['id'],'closeNotificationMsgID'))['then'](_0x1a40f9=>{_0x1a40f9['delete']()['catch'](_0x2ffd0c=>{});}));});}}if(config['AutoResponse']['Enabled']&&config['AutoResponse']['Responses']){if(config['AutoResponse']['OnlyInTickets']&&!_0xc09917['tickets']['has'](_0x108072['channel']['id']))return;const _0x229fc8=Object['keys'](config['AutoResponse']['Responses'])['find'](_0x232b72=>_0x108072['content']['toLowerCase']()['includes'](_0x232b72['toLowerCase']())||_0x108072['content']['toLowerCase']()['startsWith'](_0x232b72['toLowerCase']()));if(_0x229fc8){const _0x4c9815=config['AutoResponse']['Responses'][_0x229fc8];if(config['AutoResponse']['MessageType']==='EMBED'){const _0xaa4b03=new EmbedBuilder()['setColor'](config['EmbedColors'])['setDescription']('<@!'+_0x108072['author']['id']+'>,\x20'+_0x4c9815)['setFooter']({'text':_0x108072['author']['username'],'iconURL':_0x108072['author']['displayAvatarURL']({'dynamic':!![]})})['setTimestamp']();_0x108072['reply']({'embeds':[_0xaa4b03]});}else config['AutoResponse']['MessageType']==='TEXT'?_0x108072['reply']({'content':_0x4c9815}):console['log']('Invalid\x20message\x20type\x20for\x20auto\x20response\x20message\x20specified\x20in\x20the\x20config!');}}};