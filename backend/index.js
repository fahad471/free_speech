require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
