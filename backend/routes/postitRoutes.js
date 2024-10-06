const express = require('express');
const { PostIt}  = require('../models/PostIt');
const router = express.Router();

// Get all Post-Its
router.get('/', async (req, res) => {
  try {
    const postIts = await PostIt.find();
    res.json(postIts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new Post-It
router.post('/', async (req, res) => {
  const postIt = new PostIt({
    text: req.body.text
  });

  try {
    const newPostIt = await postIt.save();
    res.status(201).json(newPostIt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a Post-It
router.patch('/:id', async (req, res) => {
    let {id} = req.headers
    try {
        await PostIt.findByIdAndUpdate(id, {text: req.body})
        res.send({
            message: "Note updated",
            status: 1
        })
    } catch (error) {
        res.send({
            message: error.message,
            status: 0
        })
    }
});

// Delete a Post-It
router.delete('/:id', async (req, res) => {
    let {id} = req.headers
    try {
        await PostIt.findByIdAndDelete({_id: id})
        res.send({
            message: "Note deleted",
            status: 1
        })
    } catch (error) {
        res.send({
            message: error.message,
            status: 0
        })
    }
});

module.exports = router;
