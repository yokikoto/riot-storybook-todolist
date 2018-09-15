<todo-text-input>
  <input
    class="{ edit: opts.editing } { new-todo: opts.newTodo }"
    type="text"
    placeholder="{ opts.placeholder }"
    autoFocus="true"
    value="{ opts.value }"
    onblur="{ handleBlur }"
    onchange="{ handleChange }"
    onkeydown="{ handleSubmit }">

</todo-text-input>