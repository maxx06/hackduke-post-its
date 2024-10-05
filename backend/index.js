const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

const notesRouter = require("./routes/notes")

app.use("/notes", notesRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3001")
}
