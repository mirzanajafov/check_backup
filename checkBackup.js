const fs = require('fs');
const axios = require('axios');
const { createLogger,  transports } = require('winston');


// Config
const dir = __dirname;
const BOT_NAME = 'YOUR_BOT_NAME';
const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.telegram.org/' + BOT_NAME + ':' + API_KEY + '/sendMessage';
const CHAT_ID = 'YOUR_CHAT_ID';
const MESSAGE = 'YOUR MESSAGE';

// Logger

const logger = createLogger({
    transports: [
        new transports.File({filename: 'info.log'}),
        new transports.Console()
    ]
})

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
if (month < 10) month = '0' + month;
let day = date.getDate();
if (day < 10) day = '0' + day;
const today = [day, month, year].join('-');

const filename = 'backup_' + today + '.zip';


let files;
try{
    files = fs.readdirSync(dir);
}catch(e){
    files = []
    logger.error(`No such file or directory like ${dir}`)
}


const found = files.find(file => file === filename);

if (!found) {
    logger.info(`${filename} named file not found. Sending API request!`)

    axios.post(API_URL, {
        'chat_id': CHAT_ID,
        'text': MESSAGE
    }).then(() => {
        logger.info(`Message sended successfully`)
    }).catch((e) => {
        logger.error(`Unable to send message: ${e}`)
    })
}









