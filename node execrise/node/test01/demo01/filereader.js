const fs = require("fs")
fs.readFile("..\\package.json",(err,data)=>{
    if (err)console.log(err)
    else console.log(data.toString())
})