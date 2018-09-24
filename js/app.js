const store = new riotx.Store({
  state: {
    todo: '[]'
  },
  actions: {
    addTodo: (context, data) => {
      const todo = {
        id: context.getter('todoGetter').length,
        text: data.text,
        completed: false
      }
      return Promise
        .resolve()
        .then(() => {
          context.commit('todoMutation', {todo:todo});
        });
    },
    deleteTodo: (context, data) => {
      return Promise
        .resolve()
        .then(() => {
          context.commit('deleteMutation', data);
        });
    }
  },
  mutations: {
    todoMutation: (context, data) => {
      const todo = JSON.parse(context.state.todo);

      todo.push(data.todo);

      context.state.todo = JSON.stringify(todo);
      return ['changed'];
    },
    deleteMutation: (context, data) => {
      const todo = JSON.parse(context.state.todo);

      const index = todo.findIndex(item => item.id == data.id);
      todo.splice(index, 1);

      context.state.todo = JSON.stringify(todo);
      return ['changed'];
    }
  },
  getters: {
    todoGetter: (context) => {
      return JSON.parse(context.state.todo);
    }
  }
});

riotx.add(store);

riot.mount('app');
