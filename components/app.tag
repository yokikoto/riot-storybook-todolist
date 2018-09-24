<app>

  <div class="todoapp">
    <app-header add-todo="{ addTodo }" />
    <main-section todos="{ todos }" actions="{ actions }" />
  </div>

  <script>

    const store = this.riotx.get();
    this.todos = store.getter('todoGetter');
    this.actions = {
      completeTodo: () => {
      },
      completeAll: () => {
      },
      editTodo: () => {
      },
      deleteTodo: (id) => {
        store.action('deleteTodo', {id: id});
      }
    }
 
    this.addTodo = (text) => {
      store.action('addTodo', {text: text});
    }

    store.change('changed', (state, store) => {
      this.update({
        todos: state.todo
      })
    });
 
  </script>

</app>
