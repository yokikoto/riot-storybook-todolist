const store = new riotx.Store({
  state: {
    todo: []
  },
  getters: {
    todoGetter: (context) => {
      return context.state.todo
    }
  }
});

riotx.add(store);

riot.mount('app');
