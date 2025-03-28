const multer=require("multer");
const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        console.log("base",req.originalUrl);
        if(req.originalUrl.includes("/add")){
        cb(null,"public/imageone/")
        }
    },
    filename:(req,file,cb)=>{
        console.log("filename",file);
        
        cb(null, Date.now() + '-' + file.originalname); 
    }
})

const upload=multer({storage:storage});
module.exports=upload