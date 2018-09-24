<app>

  <div class="todoapp">
    <app-header addTodo="{ addTodo }" />
    <main-section todos="{ todos }" actions="{ actions }" />
  </div>

  <script>

    const store = this.riotx.get();
    this.todos = store.getter('todoGetter');
  
  </script>

</app>
