require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const helloRoutes = require('./routes/helloRoutes'); // Import the new route
const healthRoutes = require('./routes/healthRoutes');


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api', helloRoutes); // Use the /hello route under /api
app.use('/api', healthRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});

module.exports = app;
