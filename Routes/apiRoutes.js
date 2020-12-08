//require Modules
const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
    res.json(data);
    });
// get method to return all notes.
    app.get("/api/notes/:id", function (req, res) {
    res.json(data[Number(req.params.id)]);

    });
//  POST method to add notes.
    app.post("/api/notes", function (req, res) {

let newNote = req.body;
let uniqueId = (data.length).toString();
console.log(uniqueId);
newNote.id = uniqueId;
data.push(newNote);

fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
if (err) throw (err);
});

// returns new note to jason
res.json(data);
});

//Delete method
app.delete("/api/notes/:id", function (req, res) {

let noteId = req.params.id;
let newId = 0;
console.log(`Deleting note with id ${noteId}`);
data = data.filter(currentNote => {
return currentNote.id != noteId;
});

for (currentNote of data) {
currentNote.id = newId.toString();
newId++;
}
fs.writeFileSync("./db/db.json", JSON.stringify(data));
res.json(data);
});
}