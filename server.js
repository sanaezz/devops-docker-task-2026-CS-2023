const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>DevOps Docker Task</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f2f2f2;
                }

                .container {
                    background: white;
                    padding: 40px;
                    margin: auto;
                    width: 500px;
                    border-radius: 10px;
                }

                h1 {
                    color: green;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>DevOps Docker Task</h1>

                <h2>Student Information</h2>

                <p><b>Name:</b> Sana e Zehra</p>
                <p><b>Student ID:</b> JUW 35392</p>
                <p><b>Course:</b> DevOps</p>

                <h3>
                    This application is running inside a Docker container.
                </h3>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});