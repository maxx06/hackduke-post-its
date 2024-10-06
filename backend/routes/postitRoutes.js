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
router.put('/:id', async (req, res) => {
  try {
    const postIt = await PostIt.findById(req.params.id);
    if (!postIt) return res.status(404).json({ message: 'Post-It not found' });

    postIt.text = req.body.text || postIt.text;

    const updatedPostIt = await postIt.save();
    res.json(updatedPostIt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a Post-It
router.delete('/:id', async (req, res) => {
  try {
    await PostIt.findByIdAndDelete(req.params.id);
    if (!postIt) return res.status(404).json({ message: 'Post-It not found' });

    //await postIt.remove();
    res.json({ message: 'Post-It deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
