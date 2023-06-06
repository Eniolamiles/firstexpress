const express = require("express");
const mongoose = require("mongoose");
const Trainees = require("./model/todoModel");

const app = express();
const port = process.env.PORT || 8080;
// config ejs

app.set("view engine", "ejs");
require("dotenv").config();
// custon middlesware

app.use(express.static("public"));
mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("DG connected successfully"))
  .catch((err) => console.log(err));

// TESTING OUR MODEL AND DB
// for saving to the DB
// app.get("/add-trainee", async (req, res) => {
//   const TRAINEES = new Trainees({
//      name: "sam",
//      profession: "frontend dev",
//      description: "he dey code dieee",
  //});
  // TRAINEES.save()
  // .then((result)=>{
  //     res.send(result)
  // })
  // .catch((err)=>{
  //     console.log(err);
  // })
//   try {
//     const savedTrainees = await TRAINEES.save();
//     res.send(savedTrainees);
//   } catch (err) {
//     console.log(err);
//   }

  // for getting all info from the DB
//   app.get("/all-trainees", async (req, res) => {
//     try {
//       const allTrainees = await Trainees.find();
//       res.send(allTrainees);
//     } catch (err) {
//       console.log(err);
//     }

    // .then((results)=>{
    // res.send(results)
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
 // });

  // to get a single trainee
//   app.get("/single-trainee", async (req, res) => {
//     try {
//       const singleTrainee = await Trainees.findById("647df2eb997cd86341fb583b");
//       res.send(singleTrainee);
//     } catch (err) {
//       console.log(err);
//     }
    // Trainees.findById('647df2eb997cd86341fb583b')
    // .then((result) => {
    //     res.send(result)
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
 // });
//});
// routes

// const trainees = [
//     {name: 'Christy', profession: 'front-end dev'},
//     {name: 'Ejiro', profession: 'back-end dev'},
//     {name: 'Henry', profession: 'mobile app dev'},
//     {name: 'John', profession: 'desktop dev'}
// ]

app.get("/", function (req, res) {
  res.redirect("/todo");
});

app.get("/about", function (req, res) {
  res.render("about", { title: "EJS About Page" });
});

//   todo routes
app.get("/todo", async (req, res) => {
  try {
    const allTrainees = await Trainees.find();
    res.render("index", { title: "EJS Home Page", trainees: allTrainees });
  } catch (err) {
    console.log(err);
  }
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
