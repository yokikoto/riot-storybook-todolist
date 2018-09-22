<main-section>
  <section class="main">

    <input class="toggle-all" type="checkbox" 
      checked="{ completedCount === opts.todos.length }" 
      onchange="{ opts.actions.completeAll }">

    <ul class="todo-list">
      <todo-item 
        each="{ todo in filteredTodos }"
        todo="{ todo }" 
        edit-todo="{ parent.opts.actions.editTodo }"
        delete-todo="{ parent.opts.actions.deleteTodo }"
        complete-todo="{ parent.opts.actions.completeTodo }"/>
    </ul>

    <app-footer
      filter="{ filter }"
      completed-count="{ completedCount }"
      active-count="{ activeCount }"
      on-clear-completed="{ handleClearCompleted }"
      on-show="{ handleShow }"/>

    </section>

  <script>

    const TODO_FILTERS = {
      'All': () => true,
      'Active': todo => !todo.completed,
      'Completed': todo => todo.completed
    }

    this.filter = 'All';

    this.filteredTodos = [];
    this.completedCount = 0;
    this.activeCount = 0;

    this.on('mount', () => {
      this.update();
    })

    this.on('update', () => {
      this.filteredTodos = this.opts.todos.filter(TODO_FILTERS[this.filter]);
      this.completedCount = this.opts.todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count, 0
      )
      this.activeCount = this.opts.todos.length - this.completedCount;
    })

    this.handleClearCompleted = () => {
      this.opts.actions.clearCompleted();
    }

    this.handleShow = (filter) => {
      this.update({
        filter: filter
      })
    }

  </script>

</main-section>