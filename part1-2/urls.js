const fs = require('fs');
const axios = require('axios');
const { type } = require('os');
const argv = process.argv


async function makeFiles(path) {
    let data, urls;

    try {
        data = fs.readFileSync(path, 'utf8')
        urls = data.split('\n')
    } catch(e) {
        console.log(`Filename ${path} not found`)
        process.exit(1)
    }

    for (let i=0; i<urls.length; i++) {
        try {
            let content = await axios.get(urls[i])
            let baseURL = getHost(urls[i])
            writeFile(baseURL, content.data)
        } catch(e) {
            console.log(`Couldn't download ${urls[i]}`)
        }
        
    }
}

function getHost(path) {
    let temp = path.split('//')
    let temp2 = temp[1].split('/')
    return temp2[0]
}

function writeFile(path, text) {
    fs.writeFile(path, text, 'utf8', err => {
        if (err) {
            console.log("Error!!!", err)
        } 
        console.log(`Wrote to ${path} :)`)
    })
}

if (argv.length === 3) {
    makeFiles(argv[2])
}