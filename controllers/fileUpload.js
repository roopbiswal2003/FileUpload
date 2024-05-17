const File=require("../models/File");
const cloudinary=require("cloudinary").v2;

//local File Upload--> handler function

exports.localFileUpload =async(req,res) => {
    try{
        //fetch file
        const file=req.files.file;
        console.log("File has arrived->" ,file);
        
        //create path where file need to be  stored on server file
        let path=_dirname +"/files/"+Date.now()+`.${file.name.split('.')[1]}`;
        console.log("PATH->",path)

        //add path to move function
        file.mv(path,(err) =>{
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });
          
    }

    catch(error) {
        console.log(error);
        console.log("Not able to upload the fileon server");
    }
}



function isFileTypeSupported(type,supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder) {
    const options={folder};
    console.log("temp file path",file.tempFilePath);

    if(quality) {
        options.quality=quality;
    }

    options.resource_type="auto";
    return await cloudinary.uploader.upload(file,tempFilePath)
}
 
//image upload handler
exports.imageUpload =async (req,res) => {
    try{
        //data fetch
        const{name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.file.imageFile;
        console.log(file);

        //Validation
        const supportedTypes =["jpg","jpeg","png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File Type:",fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
    }

  //if file format gets supported
  console.log("Uploading to Backend");
  const response=await uploadFileToCloudinary(file,"Backend");
  console.log(response);

  //Saving the entry in Database
  const fileData = await File.create({
    name,
    tags,
    email,
    imageUrl:response.secure_url,
  })


 res.json({
    success:true,
    imageUrl:response.secure_url,
    message:'Image Successfully Uploaded',
})
}

 catch(error) {
    console.error(error);
    res.status(400).json({
        success:false,
        message:'Something went wrong',
    })
}
}



//video upload handler
exports.videoUpload =async (req,res) => {
    try{
        //data fetch
        const{name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.file.videoFile;
        console.log(file);

        //Validation
        const supportedTypes =["mp4","mov"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File Type:",fileType);
        

        //TODO add a upper limit of 5MB for video
        if(!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
    }

  //if file format gets supported
  console.log("Uploading to Backend");
  const response=await uploadFileToCloudinary(file,"Backend",97);
  console.log(response);

  //Saving the entry in Database
  const fileData = await File.create({
    name,
    tags,
    email,
    imageUrl:response.secure_url,
  })


 res.json({
    success:true,
    imageUrl:response.secure_url,
    message:'Image Successfully Uploaded',
})
}

 catch(error) {
    console.error(error);
    res.status(400).json({
        success:false,
        message:'Something went wrong',
    })
}
}



//image size Reducer
exports.imageUpload =async (req,res) => {
    try{
        //data fetch
        const{name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.file.imageFile;
        console.log(file);

        //Validation
        const supportedTypes =["jpg","jpeg","png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File Type:",fileType);
        
        
        if(!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
    }

  //if file format gets supported
  console.log("Uploading to Backend");
  const response=await uploadFileToCloudinary(file,"Backend",97);
  console.log(response);

  //Saving the entry in Database
  const fileData = await File.create({
    name,
    tags,
    email,
    imageUrl:response.secure_url,
  })


 res.json({
    success:true,
    imageUrl:response.secure_url,
    message:'Image Successfully Uploaded',
})
}

 catch(error) {
    console.error(error);
    res.status(400).json({
        success:false,
        message:'Something went wrong',
    })
}
}






