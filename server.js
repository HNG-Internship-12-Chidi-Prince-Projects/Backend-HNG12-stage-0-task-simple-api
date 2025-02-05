const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 

app.get("/", (req, res) => {
    const response = {
        email: "princegee408@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/HNG-Internship-12-Chidi-Prince-Projects/Backend-HNG12-stage-0-task-simple-api"
    };
    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
