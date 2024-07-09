const express = require("express");
const {
    connect
} = require("mongoose");
const connectToDb = require("./database/databaseConnection");
const Blog = require("./model/blogModel");
const app = express() //app ma object ayera bascha
const PORT = 3000;
const multer = require("./middleware/multerConfig").multer
const storage = require("./middleware/multerConfig").storage
const upload = multer({storage : storage})

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.set('view engine', "ejs")

app.get("/", async (req, res) => {
    const blogs = await Blog.find() //always returns array
    console.log(blogs)
    // if(blogs.length == 0){
    //     res.send("no blogs")
    // }
    res.render("index.ejs",{blogs})
   

})
app.get("/about", (req, res) => {
    const name = "jenisha shrestha"
    res.render("about.ejs", {
        name
    })

})
app.get("/contact", (req, res) => {
    const name = "Aces workshop"
    res.render("contact.ejs", {
        name
    })

})
app.get("/createblog", (req, res) => {

    res.render("createblog.ejs")

})

app.post("/createblog",upload.single('image-url'), async (req, res) => {
    
    //const title = req.body.title
    const fileName = req.file.filename
    console.log(req.file)
    const {
        title,
        subtitle,
        content
    } = req.body
    console.log(req.body)
   // console.log(title, subtitle, content)
    const blog = await Blog.create({
        title,
        subtitle,
        image : fileName,
        content
       
         
    })
    res.send(blog)
})

app.use(express.static("./storage"))

//function pass bhairacha as a argument in a method is callback function

app.listen(PORT, () => {
    connectToDb();
    console.log(`http:localhost:${PORT}`)
})