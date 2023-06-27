const { createApp } = require('../app');

(async () => {
  const port = process.env.PORT || 3000;
  const app = await createApp();
  app.listen(port, () => console.log('app listening on http://localhost:3000'));
})();
