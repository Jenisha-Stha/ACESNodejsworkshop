const express = require("express");
const { connect } = require("mongoose");
const connectToDb = require("./database/databaseConnection");
const Blog = require("./model/blogModel");
const app = express()   //app ma object ayera bascha
const PORT= 3000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.set('view engine',"ejs")

app.get("/",(req,res)=>{
    res.send("<h1>this is about page</h1>")
   
})
app.get("/about",(req,res)=>{
    const name = "jenisha shrestha"
    res.render("about.ejs",{name})
   
})
app.get("/contact",(req,res)=>{
    const name = "Aces workshop"
    res.render("contact.ejs",{name})
   
})
app.get("/createblog",(req,res)=>{
   
    res.render("createblog.ejs")
   
})

app.post("/createblog", async (req,res)=>{
    //console.log(req.body)
    //const title = req.body.title
    const {title,subtitle,content} = req.body
    console.log(title,subtitle,content)
      const blog= await Blog.create({
        title ,
        subtitle ,
        content 
    })
    res.send(blog)
})



//function pass bhairacha as a argument in a method is callback function

app.listen(PORT,() =>{
    connectToDb();
    console.log(`http:localhost:${PORT}`)
})
