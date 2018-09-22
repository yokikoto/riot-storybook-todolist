<todo-text-input>
  <input
    class="{ edit: opts.editing } { new-todo: opts.newTodo }"
    type="text"
    placeholder="{ opts.placeholder }"
    autoFocus="true"
    value="{ text }"
    onblur="{ handleBlur }"
    onchange="{ handleChange }"
    onkeydown="{ handleSubmit }">

  <script>

    this.text = this.opts.text || '';

    this.handleSubmit = (e) => {
      const text = e.target.value.trim();
      if (e.which === 13) {
        this.opts.onSave(text)
        if (this.opts.newTodo) {
          this.text = '';
        }
      }
    }

    this.handleChange = (e) => {
      this.text = e.target.value;
    }

    this.handleBlur = (e) => {
      if (this.opts.editing) {
        this.opts.onSave(e.target.value)
      }
    }

  </script>

</todo-text-input>