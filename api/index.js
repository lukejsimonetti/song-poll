var express = require('express')
var app = express()
var port = 3001
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.json({limit: '50mb'}));
app.use(session({secret: 'ssshhhhh'}));

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('api/db.json')
const db = low(adapter)

var CryptoJS = require("crypto-js");

db.defaults({ 
    polls: [{"poll_name":"March 2019", "slug":"march-2019", "items": []}],
    auth: "U2FsdGVkX19lY294mT9ZqPsBNWLJ+XXha0fpyJ3Sr00="
}).write()

var sess = new Object();
sess.isAuthenticated = false;
sess.username = "";

app.get('/api/polls', (req, res) => {
    const r = db.get('polls').value()
    res.send(r)
})
 
app.get('/api/poll/:id', (req, res) => {
    const slug = req.params.id
    let r = db.get('polls').find({slug}).value()

    res.send(r)
})

app.post('/api/poll', (req, res) => {
    const body = req.body

    body.items.map((v,i) => {
        body.items[i].id = Math.floor(Math.random() * 1000000)
        body.items[i].users_vote = []
    })

    let r = db
    .get("polls")
    .push({
        ...body, 
        slug: slugMe(body.poll_name),
    })
    .write()

    res.send(r)
})

app.post('/api/authenticate', (req, res) => {
    if(sess.isAuthenticated){
        res.send(200)
        return
    }
    const payloadPassword = req.body.password
    if(!payloadPassword){
        res.send(400)
        return
    }
    const storedPasswordHash = db.get('auth').value()
    const givenPasswordHash = CryptoJS.AES.encrypt(payloadPassword, 'doobiedoo!').toString();
    
    const realPassGiven = CryptoJS.AES.decrypt(givenPasswordHash, 'doobiedoo!').toString(CryptoJS.enc.Utf8);
    const realPassStored = CryptoJS.AES.decrypt(storedPasswordHash, 'doobiedoo!').toString(CryptoJS.enc.Utf8);

    if(realPassGiven === realPassStored){
        sess.isAuthenticated = true
        res.send(200)
        return
    }
    res.send(401)
    return
})

app.post('/api/yourname', (req, res) => {
    const username = req.body.name ? req.body.name : "ERROR"
    sess.username = username
    res.send(200, req.session)
    return
})

app.post('/api/vote', (req, res) => {
    const songID = req.body.songID
    const slugID = req.body.slugID
   
    const pollObj = db.get('polls').find({slug: slugID}).value()
    let songObj = pollObj.items.filter(v => v.id == songID)

    if(songObj[0].users_vote.includes(sess.username)){
        res.send(400, 'You can\'t vote twice.')
        return 
    }

    songObj[0].users_vote.push(sess.username)

    const index = pollObj.items.indexOf(songObj[0])
    if(index > -1){
        pollObj.items.splice(index, 1)
    }

    pollObj.items.push(songObj[0])

    const x = db
    .get("polls")
    .find({slug: pollObj.slug})
    .write()

    res.send(200,x)
    return
})

const slugMe = (nonSlug) => {
    return nonSlug.replace(/\s+/g, '-').toLowerCase()
}

app.listen(port)