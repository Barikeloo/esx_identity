fx_version 'cerulean'
game 'gta5'

author 'ESX FRAMEWORK'
description 'esx_identity modified by Barikelo#3220'
Design 'Barikelo#3220'
version '1.0.0'

shared_script '@es_extended/imports.lua'

server_scripts {
	'@es_extended/locale.lua',
	'@oxmysql/lib/MySQL.lua',
	'locales/en.lua',
	'locales/es.lua',
	'locales/cs.lua',
	'locales/pl.lua',
	'locales/fi.lua',	
	'config.lua',
	'Server/main.lua'
}

client_scripts {
	'@es_extended/locale.lua',
	'locales/en.lua',
	'locales/es.lua',
	'locales/cs.lua',
	'locales/pl.lua',
	'locales/fi.lua',	
	'config.lua',
	'Client/main.lua'
}

ui_page 'Client/ui/index.html'

files ({
    'Client/ui/app.js',
    'Client/ui/index.html',
    'Client/ui/main.css',
    'Client/ui/images/back.png',
    'Client/ui/images/michael.png',
    'Client/ui/audio/audio.mp3'
})

dependency 'es_extended'