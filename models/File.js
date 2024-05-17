//import mongoose
const mongoose =require("mongoose");
const nodemailer=require("nodemailer");

//route handler
const fileSchema = new mongoose.Schema({
    
    name: {
        type:String,
        required:true,
    },

    imageUrl: {
        type:String,
    },

    tags: {
        type:String,
    },

    email: {
        type:String,
    }

    
});

//post middleware
fileSchema.post("save",async function(doc) {
    try {
        console.log("DOC",doc)
    

    //transporter
    let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth: {
            user:process.env.MAIL_USER,
            pass:user.env.MAIL_PASS,
        }

    });

    //send mail
    let info =await transporter.sendMail({
        from:'Roop',
        to:'doc.email',
        subject:'New File Uploaded Successfully On Cloudinary',
        html:`<h2>Hello Everyone</h2> <p>File uploaded Successfully</p>`

       
    })

    console.log("INFO",info);

}

    catch(error) {
        console.error(error);
    }
    
}) 


const File=mongoose.model("File",fileSchema);

//export
module.exports = mongoose.model("user",userSchema);

