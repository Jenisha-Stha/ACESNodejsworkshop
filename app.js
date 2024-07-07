const express = require("express")
const app = express()   //app ma object ayera bascha
const PORT= 3000;
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





//function pass bhairacha as a argument in a method is callback function

app.listen(PORT,() =>{
    console.log(`https:localhost:${PORT}`)
}) 