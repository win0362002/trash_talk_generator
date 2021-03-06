const express = require('express')
const exphdbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const generate_trashTalk = require('./trash_talk_generator.js')
const app = express()
const port = 3000

//Register handlebars helper
handlebars.registerHelper('ifEquals', (job, targetJob, options) => {
  return job === targetJob ? options.fn(this) : options.inverse(this)
})

//Set template engine
app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Set body parser
app.use(bodyParser.urlencoded({ extended: true }))

//Set routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.job
  //const characters = select_character(job)
  let trashTalk = ''
  if (job) {
    trashTalk = generate_trashTalk(job)
  } else {
    trashTalk = '選個職業很難嗎？'
  }

  res.render('index', { trashTalk, job })
})

//Start and listen
app.listen(port, () => {
  console.log(`Start and Listen on localhost:${port}`)
})
