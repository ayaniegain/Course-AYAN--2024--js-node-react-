import express from "express";
import multer from "multer";
let port = 8000;
let app = express();

app.use(express.json());


const storage= multer.diskStorage({
    destination : function(req,res,cb){

        cb(null,"./public/data/uploads/")
    },
    filename:function (req,file,cb){
        console.log("fileN",file)
        const uniqueFileName =Date.now()+" "+ file.originalname
        cb(null,uniqueFileName)
    }
})

const upload = multer({ storage: storage })

app.post("/upload", upload.single("uploaded_file"), (req, res) => {

    console.log("first")
  if (!req.file) {
    return res.status(400).send("no file uploaded");
  }

  res.status(200).send("file uoloaded successfully ");
});

app.listen(port, () => {
  console.log("port is running on ", port);
});
