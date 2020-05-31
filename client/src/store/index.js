import {
  writable
} from 'svelte/store';

export const toggleEditModalDisplay = writable(false);

const editModalTodo = () => {
  const {
    subscribe,
    set,
    update
  } = writable({});
  return {
    subscribe,
    update,
    reset: () => set({})
  }
}

const todos = () => {
  const {
    subscribe,
    set,
    update
  } = writable([]);
  return {
    subscribe,
    update,
    reset: () => set([]),
  }
}

export const todosStore = todos();

export const editModalStore = editModalTodo();
