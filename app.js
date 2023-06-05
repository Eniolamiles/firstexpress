const express = require('express');
const mongoose = require('mongoose');
const Trainees = require('./model/todoModel')


const app = express()
const port = process.env.PORT || 8080
// config ejs

app.set('view engine', 'ejs')
require('dotenv').config()
// custon middlesware


app.use(express.static('public'))
mongoose.connect(process.env.DBURL)
.then(()=> console.log('DG connected successfully'))
.catch((err) => console.log(err))

// TESTING OUR MODEL AND DB
app.get('/add-trainee',(req,res)=>{
    const TRAINEES = new Trainees({
        name:'Christy',
        profession:'senior dev',
        description:'sge dey code dieee'

})
    TRAINEES.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
    try{

    }
    catch(err){
        console.log(err);
    }
})
// routes

const trainees = [
    {name: 'Christy', profession: 'front-end dev'},
    {name: 'Ejiro', profession: 'back-end dev'},
    {name: 'Henry', profession: 'mobile app dev'},
    {name: 'John', profession: 'desktop dev'}
]

app.get("/", function (req, res) {
    res.render("index", { title: "EJS Home Page", trainees });
  });
  
  app.get("/about", function (req, res) {
    res.render("about", { title: "EJS About Page" });
  });

  app.get("/todo/create", function (req, res) {
    res.render("createList", { title: "EJS Create Page" });
  });
  
  app.use((req, res) => {
    res.status("404").render("404", { title: "EJS Error" });
  });
  
  // server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });