<app-footer>
  <footer class="footer">
  
    <span class="todo-count">
      <strong>{ opts.activeCount || 'No' }</strong>
      { opts.activeCount === 1 ? 'item' : 'items' } left
    </span>

    <ul class="filters">
      <li each="{ filter in filters }">
        <a class={ selected: filter === parent.opts.filter }
          onclick="{ parent.onShow }">
          { filter }
        </a>
      </li>
    </ul>

    <button show="{ opts.completedCount > 0 }"
      class="clear-completed"
      onclick={ opts.onClearCompleted } >
        Clear completed
    </button>

  </footer>

  <script>

    this.filters = ['All', 'Active', 'Completed'];

    this.onShow = (e) => {
      this.opts.onShow(e.item.filter);
    }

  </script>

</app-footer>
