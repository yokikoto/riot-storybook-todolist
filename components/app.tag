<app>

  <div class="todoapp">
    <app-header addTodo="{ addTodo }" />
    <main-section todos="{ todos }" actions="{ actions }" />
  </div>

  <script>

    this.todos = [];
    this.actions = {
    }

    this.addTodo = (text) => {
      todos.push({
        id : this.todos.length,
        text: text,
        completed: false
      });
    }
  
  </script>

</app>