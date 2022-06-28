const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
require("./db/conn");
const User=require("./models/users");
const port=process.env.PORT || 8000;
app.set("view engine","hbs");
app.use(express.urlencoded({extended:false}))


const staticPath = path.join(__dirname, "../public");
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/css',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticPath))

const templatePath = path.join(__dirname, "../templates/views")
app.set("views", templatePath)

const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)


app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact",async(req,res)=>{
     try {
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
     } catch (error) {
        res.status(500).send(error);
     }
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})