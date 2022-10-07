const fs = require("fs")
fs.readFile("test.txt",(errors,data)=>{
    if (errors)console.log(errors);
    console.log(data.toString())
})
