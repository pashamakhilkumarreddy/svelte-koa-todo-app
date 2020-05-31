import {
  writable
} from 'svelte/store';

export const toggleEditModalDisplay = writable(false);

export const editModalTodoValue = writable({});

const editModalTodo = () => {
  const {
    subscribe,
    set,
    update
  } = writable({});
  return {
    subscribe,
    updateTodoValue(id, name, description, completed) {
      update(state => {
        return {
          id,
          name,
          description,
          completed,
        }
      });
    },
    reset: () => set({})
  }
}

export const modalValue = editModalTodo();
