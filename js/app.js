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
    }
  },
  mutations: {
    todoMutation: (context, data) => {
      context.state.todo.push(data.todo);
      return ['todoChanged'];
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
