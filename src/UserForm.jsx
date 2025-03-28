import {useState} from "react"
function UserForm() {
  const [val,setVal]=useState({image:"",data:""})
  const submitForm=async(e)=>{
    e.preventDefault();

    console.log("h");
    
     const formData=new FormData();
     formData.append("image",val.image);
     formData.append("data",val.data)
     for(let [key,value] of formData.entries()){
      console.log(`${key}:${value}`); 
     }
         let data=await fetch('http://localhost:3000/add',{
      method:"POST",
      body:formData
    });
    data=await data.json();
    console.log(data);
    
  }
  return (
    <>
      <form  style={{background:"#033649",width:"300px",margin:"10px auto 0px auto",borderRadius:"10px",padding:"0.5rem 0"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h1 style={{margin:"10px 0"}}>Form</h1>
          <p style={{margin:"0 0 10px 0",padding:"0",textAlign:"left",width:"80%",color:"#666c79"}}>Sign in to continue to your account</p>
          <div className="div-container">
            <label htmlFor="image">Select Image</label>
            <br />
          <input style={{padding:"0.5rem"}} type="file" name="image" id="" onChange={(e) => setVal({ ...val, image: e.target.files[0] })}
          />
          </div>
          <div  className="div-container">
            <label htmlFor="data">Enter name</label>
            <br />
          <input type="text" placeholder="Enter your name" name="data" id="" onChange={(e)=>{setVal({...val,data:e.target.value})}}/>
          </div>

        </div>
        <button type="submit" onClick={submitForm}>Submit</button>
      </form>
    </>
  );
}

export default UserForm;
