localhost:8000/1/?username=ayan

req.params
req.query

app.get("/:id",auth,(req, res) => {

      console.log(req.params['id'])

res.send("<h2>hello</h2>");
});

put: data over write
path: data as it is