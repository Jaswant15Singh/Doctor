const pool = require("../db/db");

const addData = async (req, res) => {
  // const {}=req.file;
  const { imageone, data } = req.body;
  console.log("dataaa", req.file);
  console.log(data);
  const updatedPath = req.file.path.replace(/^public[\\/]/, "");
  console.log(updatedPath);
  pool.query(
    "insert into table_one (image,name) values ($1,$2)",
    [updatedPath, data],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "server error" });
      }
      res.status(200).json({ message: "success"});
    }
  );
};

const getData=async(req,res)=>{
    pool.query('select * from table_one',(err,result)=>{
        if(err){
            return res.status(500).json({ message: "server error" });
        }
        else{
            res.status(200).json({ message: "success",data:result.rows});

        }
    })
}
module.exports = { addData,getData };
