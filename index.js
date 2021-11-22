var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/task2.html");
})  
var port=process.env.PORT||3000;
app.listen(port, function()
{
    console.log("Server Starting running on http://localhost:"+port);
});