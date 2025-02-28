const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});

// app.use((req,res)=>{
//    // console.log(req);
//     console.log("request recieved");
//     let code = "<h1>hello it's me kamlakant</h1> <li>apple</li> <li>mango</li>";
//     res.send(code);
// });

app.get("/:username/:id",(req,res)=>{
    let { username, id} = req.params;
    let htmlstr = `<h1>welcome to the page of ${username}<h1/>`
    res.send(htmlstr);
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no result");
});

// app.get("/khusi",(req,res)=>{
//     res.send("you are connecting to khusi!!")
// })

// app.get("/priya",(req,res)=>{
//     res.send("you are connecting to priya!!")
// })

// app.get("/chandan",(req,res)=>{
//     res.send("you are connecting to chandan!!")
// })

// app.get("/sonu",(req,res)=>{
//     res.send("you are connecting to sonu!!")
// })

// app.get("*",(req,res)=>{
//     res.send("404 error page not found")
// })

// app.post("/",(req,res)=>{
//     res.send("you are sending a post request to a root")
// })