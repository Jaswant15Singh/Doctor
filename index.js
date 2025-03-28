const express=require("express");
const cors=require("cors");
const routeone=require("./Routes/routeone")
const app=express();
app.use(express.json());
app.use(express.static("public"))
app.use(cors());
app.use("/",routeone)
app.listen(3000,()=>{
    console.log(`Running on port 5000`); 
})