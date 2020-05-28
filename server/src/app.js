const Koa = require('koa');
const config = require('./config');

const app = new Koa();

const PORT = 4000;

app.listen(PORT, () => {
  console.info(`The application is running on PORT ${PORT}`);
})