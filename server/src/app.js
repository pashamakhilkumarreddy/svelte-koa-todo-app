const Koa = require('koa');
const helmet = require('koa-helmet');
const compress = require('koa-compress');
const bodyParser = require('koa-body');
const cors = require('@koa/cors');
const mongoose = require('mongoose');

const {
  server,
  db
} = require('./config');

const app = new Koa();

const PORT = server.PORT || 4000;

app.use(bodyParser());
app.use(cors());
app.use(helmet());
app.use(compress());

require('./routes')(app);

mongoose.connect(db.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.info(`Successfuly connected to the database`);
  app.listen(PORT, () => {
    console.info(`The application is running on PORT ${PORT}`);
  });
}).catch(err => console.error(`Unable to connect to the database ${err}`));
