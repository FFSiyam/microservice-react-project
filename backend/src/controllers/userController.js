const promisePool = require('../models/userModel');

exports.getUsers = async (req, res) => {
      try {
            const [rows] = await promisePool.query('SELECT * FROM users');
            res.json(rows);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
};

exports.addUser = async (req, res) => {
      const { name, email, phone } = req.body; // Added phone field
      try {
            await promisePool.query(
                  'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
                  [name, email, phone]
            );
            res.status(201).send('User added successfully');
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
};


exports.updateUser = async (req, res) => {
      const { id } = req.params;
      const { name, email, phone } = req.body;

      if (!name || !email || !phone) {
            return res.status(400).json({ error: 'Missing user data' });
      }

      try {
            await promisePool.query(
                  'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
                  [name, email, phone, id]
            );
            res.status(200).send('User updated successfully');
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
};



exports.deleteUser = async (req, res) => {
      const { id } = req.params;
      try {
            await promisePool.query('DELETE FROM users WHERE id = ?', [id]);
            res.status(200).send('User deleted successfully');
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
};

// Implement updateUser similarly
