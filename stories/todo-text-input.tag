<todo-text-input>
  <input
    class="{ edit: opts.editing } { new-todo: opts.newTodo }"
    type="text"
    placeholder="{ opts.placeholder }"
    autoFocus="true"
    value="{ state.text }"
    onblur="{ handleBlur }"
    onchange="{ handleChange }"
    onkeydown="{ handleSubmit }">

  <script>

    this.state = {
      text: this.opts.text || ''
    }

    this.handleSubmit = (e) => {
      const text = e.target.value.trim();
      if (e.which === 13) {
        this.opts.onSave(text)
        if (this.opts.newTodo) {
          this.state = {
            text: ''
          }
        }
      }
    }

    this.handleChange = (e) => {
        this.state = {
          text: e.target.value
        }
    }

    this.handleBlur = (e) => {
      if (!this.opts.newTodo) {
        this.opts.onSave(e.target.value)
      }
    }

  </script>

</todo-text-input>