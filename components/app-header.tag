<app-header>

  <h1>todos</h1>
  <todo-text-input
    new-todo="{ true }"
    on-save="{ handleSave }"
    placeholder="What needs exitto be done?"/>

  <script>

    this.handleSave = (text) => {
      if (text.length !== 0) {
        this.opts.addTodo(text);
      }
    }
    
  </script>

</app-header>