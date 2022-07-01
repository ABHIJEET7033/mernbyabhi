const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ABHI7033:Abhi7033@abhidatabase.8skwb.mongodb.net/?retryWrites=true&w=majority")
.then(()=>
    console.log("connection setup")
)
.catch((err)=>
    console.log(err)
)


