const todos = require('./todos');

module.exports = (app) => {
  app.use(todos.routes());
};
