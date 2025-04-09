import chalk from 'chalk';
import path from 'path'
import express from 'express'
import multer from 'multer'
import fs from 'fs'
const app = express()
const port = 5000

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.get('/', (req, res) => {
  res.render('homepage')

})

app.get('/image-data', (req, res) => {

  fs.readFile("./uploads/1744177403845screen 1.png",(err,data)=>{
      if (err) {

        res.status(500).send("error reading image")
        
      }else{
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      }
  })
})


//storage

let storage= multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
},
filename: function (req, file, cb) {
  const uniqueSuffix = Date.now() + file.originalname
  cb(null,uniqueSuffix)
}

}

)
const upload = multer({ storage: storage })


app.post('/profile', upload.single('POSTER'), function (req, res, next) {
  console.log(req .file, req.body)
  res.send("upload image successfully")
})



app.listen(port, () => {
  console.log(chalk.red.bgGreen.bold`Example app listening on port ${port}`)
})