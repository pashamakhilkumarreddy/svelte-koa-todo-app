const Router = require('koa-router');

const router = new Router();

const {
  addTodo, getTodos, editTodo, deleteTodo,
} = require('../controllers');

router.post('/todo', addTodo);

router.get('/todos', getTodos);

router.put('/todo/:id', editTodo);

router.delete('/todo/:id', deleteTodo);

module.exports = router;
