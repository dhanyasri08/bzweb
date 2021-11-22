var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/task2.html");
})  
app.listen(3000, function()
{
    console.log("Server Starting running on http://localhost:"+3000);
});