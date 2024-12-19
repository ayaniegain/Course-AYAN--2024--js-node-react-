const express = require("express");
const app = express();

app.use(express.json());
// app.use(express.static('public'));

app.use((req,res,next)=>{
  console.log(req.method,req.ip,req.hostname);
  next();
})

const auth=(req,res,next)=>{
      // res.send('this is auth')


      // console.log(req.query)
      // console.log("url",req.url)
      
      let name='kavita'
      showMyshame(name)
      
      next()
    }
    
    let showMyshame=(name)=>{
      
      // console.log(`${name}`)
    }
    
    
    
    app.get("/:id",auth,(req, res) => {
      
      // console.log(req.params['id'])
  res.send("<h2>hello</h2>");
});

app.get("/", (req, res) => {
  console.log("url",req.url)

  res.send("get request sent");
});

app.post("/", (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) {
    throw new Error("no value detected");
  }

  res.send({ username, password });
});

app.listen(8000, () => {
  console.log("server running...");
});
