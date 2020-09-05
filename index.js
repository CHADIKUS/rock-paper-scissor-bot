const Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');

//var token = 'NzUxNjU2ODIzNzUyMjI4OTE3.X1MQ9w.07jxbws0JJm36kB2IFa4Q1uCwIw'


bot.on('ready', () => {
    console.log('botis is onis');
});


//------------------------------------------------------------
//game info embed
//-------------------------------------------------------------

const gameInfoEmbed = {
	color: 15105570,
	title: 'game info',
	
	author: {
		name: 'rock paper scissors info',
		icon_url: 'https://cdn.discordapp.com/attachments/666823861702230036/751664388594728991/rock_paper_pfp.png',
	},
	description: '',

	fields: [

		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'WARNING',
			icon_url: '',
			value: 'what ever you do, DONT SPAM IT, it will break and u will have to kick and re-invite it',
			inline: true,
		},


	],

	timestamp: new Date(),
	footer: {
		text: 'made by the one and only chad, plz dont steal :)',
		
	},
};

const gameEmbed = {
	color: 15105570,
	title: 'rock paper scissors!!',
	footer: {
		text: 'if you dont know how to play, type ~gameInfo to learn',
		
	},	
};



//-------------------15105570--------------------------------------------


//---------------------------------------------
//rock paper scissors
//-------------------------------------------

function between(min, max) {  
	return Math.floor(
	  Math.random() * (max - min) + min
	)
  }


var active = false

var player

bot.on('message', msg=>{
	
	
	if(msg.content === '~challenge'){
		player = msg.author.username
		active = true

		msg.channel.send({embed: gameEmbed})

	}
})

bot.on('message', msg=>{
	if(player === msg.author.username){
		if(active === true) {
			var number = between(1, 3)
			


			if(msg.content === '~rock'){
				if(number == 1){
					msg.reply('rock')
					msg.reply('it was a tie!, try ~challenge again')
				} 

				if(number == 2){
					msg.reply('paper')
					msg.reply('you lost!')
				} 

				if(number == 3){
					msg.reply('scissors')
					msg.reply('you won!')
				} 

				active = false

				player = ' '
			}

			if(msg.content === '~scissors'){
				if(number == 1){
					msg.reply('rock')
					msg.reply('you lost!')
				} 

				if(number == 2){
					msg.reply('paper')
					msg.reply('you won!')
				} 

				if(number == 3){
					msg.reply('scissors')
					msg.reply('it was a tie!, try ~challenge again')
				} 

				active = false

				player = ' '
			}

			if(msg.content === '~paper'){
				if(number == 1){
					msg.reply('rock')
					msg.reply('you won!')
				} 

				if(number == 2){
					msg.reply('paper')
					msg.reply('it was a tie!, try ~challenge again')
				} 

				if(number == 3){
					msg.reply('scissors')
					msg.reply('you lost!')
				} 

				active = false

				player = ' '
			}





		}


	}

})

//-- im comenting this out cuz i want to salvaging this but this gode is  cuz heroku for some reason is being STINKY PEEPEE HEAD
/*
bot.on('message', msg=>{

	var active = true
	var player = msg.author.username

	if(msg.content === '~challange'){

		msg.reply('You DARE challange ME fool')
		msg.channel.send({ embed: gameEmbed});
		msg.channel.send('choose your play')

		bot.on('message', msg=>{
			if(msg.content === 'choose your play'){

				if(msg.author.username === 'chads testing bot'){

					msg.react('📰')
					msg.react('✂️')
					msg.react('🌑')
					
						
					bot.on('messageReactionAdd', reaction => {
						console.log('pee beam')
						if(reaction._emoji.name === '🌑') {
							if (reaction.count === 2) {
								if (active === true) {
									msg.channel.send('📰')
									active = false
								}
								
							}		
						} 


						
						if(reaction._emoji.name === '📰') {
							if (reaction.count === 2) {
								if (active === true) {
									msg.channel.send('✂️')
									active = false
								}
								
							}		
						}

						if(reaction._emoji.name === '✂️') {
							if (reaction.count === 2) {
								if (active === true) {
									msg.channel.send('🌑')
									active = false
								}
								
							}		
						}
 					});






					


				}
				
			}

		})

	}
})

*/


//the embed telling you how to play
bot.on('message', msg=>{
	if(msg.content === '~gameInfo'){
		msg.channel.send({ embed: gameInfoEmbed });
	}
})


//---------------------------------------------------

bot.login(procces.env.TOKEN);
