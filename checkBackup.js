const fs = require('fs')
const axios = require('axios')

// Config
const dir = __dirname
const BOT_NAME = 'YOUR_BOT_NAME'
const API_KEY = 'YOUR_API_KEY'
const API_URL ='https://api.telegram.org/' + BOT_NAME + ':' + API_KEY + '/sendMessage'
const CHAT_ID = 'YOUR_CHAT_ID'
const MESSAGE = 'YOUR MESSAGE'

const date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
if (month < 10) month = '0' + month
let day = date.getDate()
if (day < 10) day = '0' + day
const today = day + '-' + month + '-' + year

const filename = 'backup_'+today+'.zip' 


const files = fs.readdirSync(dir)

const found = files.find(file => file === filename)

if (!found) {
    try{
        const response = axios.post(API_URL,{
                'chat_id': CHAT_ID,
                'text': MESSAGE  
        })
    
    }catch(e){
        console.log(e)
    }
}









