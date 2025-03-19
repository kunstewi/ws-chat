import express from "express"
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Basic Routing
app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(3000)