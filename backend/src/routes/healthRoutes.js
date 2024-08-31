const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Make sure this is the correct path to your db connection

// Route to check database connection
router.get('/db-check', async (req, res) => {
      try {
            // Attempt a simple query to check the connection
            await db.query('SELECT 1');
            res.status(200).send('Database connected successfully!');
      } catch (error) {
            console.error('Database connection error:', error);
            res.status(500).send('Failed to connect to the database.');
      }
});

module.exports = router;
