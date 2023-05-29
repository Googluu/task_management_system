const { createApp } = require('../app');

const port = process.env.PORT || 5000;
const app = createApp();
app.listen(port, () => console.log('app listening on http://localhost:3000'));
