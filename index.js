const express= require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const port = process.env.PORT||3000
//const fetch=require('node-fetch')
const state = require('./routes/api/state')

const db = 'mongodb+srv://dhananjaya:575gmail@cluster1-agn5p.mongodb.net/test?retryWrites=true'

mongoose.connect(db)
.then(()=>{
    console.log('connection done')
})
.catch((err)=>console.log(err))

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(__dirname+'/public'))
app.use(bodyparser.json())
app.set('views',path.join(__dirname,'/views')) 
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})



app.use('/api/state',state) 

app.listen(port,()=> console.log('listening at port 3000'))