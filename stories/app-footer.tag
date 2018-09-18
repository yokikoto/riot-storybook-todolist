<app-footer>
  <footer class="footer">
    <span class="todo-count">
      <strong>{ activeCount || 'No' }</strong> { itemWord } left
    </span>
    <ul class="filters">
    <li each="{ filter in filters }">
      <a class={ selected: filter === parent.opts.filter }
        onClick="{ parent.opts.onShow }">
        { filter }
      </a>
    </li>
    </ul>
    <button show="{ opts.completedCount > 0 }" className="clear-completed"
        onClick={ opts.onClearCompleted } >
        Clear completed
    </button>

  </footer>

  <script>

    this.filters = ['All', 'Active', 'Completed'];
    this.activeCount;
    this.itemWord;

    this.on('mount', () => {
        this.update();
    })

    this.on('update', () => {
        this.activeCount = this.opts.activeCount;
        this.itemWord = this.opts.activeCount === 1 ? 'item' : 'items';
    })

    this.onShow = 

    this.renderFilterLink = () => {

    }

    this.renderClearButton = () => {

    }

  </script>

</app-footer>
