const store = new riotx.Store({
  state: {
    todo: []
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
      context.state.todo.push(data.todo);
      return ['changed'];
    },
    deleteMutation: (context, data) => {
      const index = context.state.todo.findIndex(item => item.id == data.id);
      context.state.todo.splice(index, 1);
      return ['changed'];
    }
  },
  getters: {
    todoGetter: (context) => {
      return context.state.todo
    }
  }
});

riotx.add(store);

riot.mount('app');
