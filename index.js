//app create
const express=require("express");
const app=express();

//PORT 
require("dotenv").config();
const PORT=process.env.PORT || 3000;

//middleware
app.use(express.json());
const fileUpload =require("express-fileUpload");
app.use(fileUpload({
    useTempfiles : true,
    tempFileDir  :'/tmp/'
}));

//db se connect karna hai
const db=require("./config/database");
db.connect(); 

//cloud se connect karna hai
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryconnect(); 

//api route mount karna hai
const Upload=require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);

//activate the server
app.listen(PORT,()=>{
    console.log(`App is started at Port no ${PORT}`);
})

 