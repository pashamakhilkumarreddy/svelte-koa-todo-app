const {
  isValidObjectId,
} = require('mongoose');
const {
  Todos,
} = require('../models');

module.exports = {
  async addTodo(ctx) {
    try {
      const {
        name,
        description,
      } = ctx.request.body;
      if (name && description) {
        const todo = await new Todos({
          name,
          description,
        }).save();
        ctx.body = {
          error: false,
          status: 201,
          payload: {
            todo,
          },
          statusMessages: [
            'Successfully add the new todo',
          ],
        };
        return;
      }
      ctx.body = {
        error: true,
        status: 400,
        statusMessages: [
          'Unable to create a new todo!!',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal Server error',
        ],
      };
    }
  },
  async getTodos(ctx) {
    try {
      const todos = await Todos.find({}).sort({
        createdDate: 'desc',
      });
      ctx.body = {
        error: false,
        status: 200,
        payload: {
          todos,
        },
        statusMessages: [
          'Successfully fetched the todos!',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async editTodo(ctx) {
    try {
      const {
        id,
      } = ctx.params;
      const {
        name,
        description,
        completed,
      } = ctx.request.body;
      if (name && description && isValidObjectId(id)) {
        const updatedTodo = await Todos.findByIdAndUpdate(id, {
          name,
          description,
          completed,
        }, {
          new: true,
        });
        ctx.body = {
          error: false,
          status: 200,
          payload: {
            updatedTodo,
          },
          statusMessages: [
            'Succesfully updated the todo',
          ],
        };
        return;
      }
      ctx.body = {
        error: true,
        status: 400,
        statusMessages: [
          'Unable to update the todo',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async deleteTodo(ctx) {
    try {
      const {
        id,
      } = ctx.params;
      if (isValidObjectId(id)) {
        const todo = await Todos.findByIdAndDelete(id);
        if (todo) {
          ctx.body = {
            error: false,
            payload: {
              deletedTodo: todo,
            },
            status: 200,
            statusMessages: [
              'Successfully deleted the todo',
            ],
          };
          return;
        }
        ctx.body = {
          error: true,
          status: 403,
          statusMessages: [
            'No todo to delete',
          ],
        };
      }
      ctx.body = {
        error: true,
        status: 400,
        statusMessages: [
          'Unable to delete the todo',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
