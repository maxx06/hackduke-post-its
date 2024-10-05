const express = require("express")
const router = express.Router()

router
    .route("/:id")
    .get("/", (req, res) => {
        res.send("Hello, world!")
    })
    .delete("/", (req, res) => {
        res.send("Hello, world!")
    })
    .put("/", (req, res) => {
        res.send("Hello, world!")
    })
    .patch("/", (req, res) => {
        res.send("Hello, world!")
    })

router.param("id", (req, res, next, id) => {
    console.log(`ID is: ${id}`)
    next()
})

module.exports = router;