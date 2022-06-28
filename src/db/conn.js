const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/abhidynamic")
.then(()=>
    console.log("connection setup")
)
.catch((err)=>
    console.log(err)
)