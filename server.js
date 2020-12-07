// required modules
const express = require("express");
const fs = require("fs");

// server application port 
const app = express();
const PORT = process.env.PORT || 4800;

// Read URL or JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Use public folder
app.use(express.static("public"));

// Included js files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Add listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});