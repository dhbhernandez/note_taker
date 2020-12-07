const path = require("path");
module.exports = function(app){
    
    // Route to go to notes.html
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Route to go to index.html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
