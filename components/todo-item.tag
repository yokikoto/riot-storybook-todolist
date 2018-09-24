<todo-item>

  <li class="{ completed: opts.todo.completed } { editing: editing }">
    <todo-text-input show="{ editing }" 
      text="{ opts.todo.text }" 
      editing="{ editing }" 
      on-save="{ handleSave }"/>

    <div hide="{ editing }" class="view">
        <input class="toggle" type="checkbox" checked="{ opts.todo.completed }" onChange="{ completeTodo }">
        <label ondblclick={ handleDblClick }>{ opts.todo.text }</label>
        <button class="destroy" onclick="{ deleteTodo }"></button>
    </div>
  </li>
  
  <script>

    this.editing = false;

    this.handleSave = (text) => {
      const id = this.opts.todo.id;
      if (text.length === 0) {
        this.opts.deleteTodo(id);
      } else {
        this.opts.editTodo(id, text);
      }
      this.update({
        editing: false
      });
    }

    this.completeTodo = () => {
        this.opts.completeTodo(this.opts.todo.id);
    }

    this.handleDblClick = () => {
        this.editing = true;
    }

    this.deleteTodo = () => {
        this.opts.deleteTodo(this.opts.todo.id);
    }

  </script>

</todo-item>
