const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

routes(app);

app.get('/', (req, res) => {
  res.send('API Rest com autenticação, perfis de usuários e permissões');
});

app.listen(PORT, () => console.log(`Server listening on  http://localhost:${PORT}`));

module.exports = app;
