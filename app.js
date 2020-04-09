var express=require("express");
var app =express();
var request=require("request");
app.set("view englin","ejs");

app.get("/",(req,res)=>{
    res.render("search.ejs")
})

app.get("/results",(req,res)=>{
    var query=req.query.search;
    var url='http://www.omdbapi.com/?apikey=thewdb&s='+ query;
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200)
        {
            data=JSON.parse(body);
            res.render("results.ejs",{data: data});
        }
        else{
            console.log(error);
        }
    });
});

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});