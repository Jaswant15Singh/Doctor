const express=require("express");
const {addData,getData}=require("../Controllers/contone");
const upload=require("../utils/multer")

const Router=express.Router();
Router.post("/add",upload.single("image"),addData)
Router.get("/getdata",getData)
module.exports=Router