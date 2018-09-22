import { mount, tag, storiesOf } from '@storybook/riot';
import { action } from '@storybook/addon-actions';

import '../components/main-section.tag';

storiesOf('main-section', module)
  .add('all active', () =>
    tag('test', '<div class="todoapp"><main-section todos="{ opts.todos }" actions="{ opts.actions }"/></div>', '', '', () => { }) &&
    mount('test', {
      todos: [
        { id: 'one', text: 'Item One', completed: false },
        { id: 'two', text: 'Item Two', completed: false },
      ],
      actions: {
        clearCompleted: action('clearCompleted'),
        completeAll: action('completeAll'),
        editTodo: action('editTodo'),
        deleteTodo: action('deleteTodo'),
        completeTodo: action('completeTodo')
      }
    })
  )
  .add('some completed', () =>
    tag('test', '<div class="todoapp"><main-section todos="{ opts.todos }" actions="{ opts.actions }"/></div>', '', '', () => { }) &&
    mount('test', {
      todos: [
        { id: 'one', text: 'Item One', completed: false },
        { id: 'two', text: 'Item Two', completed: true },
      ],
      actions: {
        clearCompleted: action('clearCompleted'),
        completeAll: action('completeAll'),
        editTodo: action('editTodo'),
        deleteTodo: action('deleteTodo'),
        completeTodo: action('completeTodo')
      }
    })
  )
  .add('all completed', () =>
    tag('test', '<div class="todoapp"><main-section todos="{ opts.todos }" actions="{ opts.actions }"/></div>', '', '', () => { }) &&
    mount('test', {
      todos: [
        { id: 'one', text: 'Item One', completed: true },
        { id: 'two', text: 'Item Two', completed: true },
      ],
      actions: {
        clearCompleted: action('clearCompleted'),
        completeAll: action('completeAll'),
        editTodo: action('editTodo'),
        deleteTodo: action('deleteTodo'),
        completeTodo: action('completeTodo')
      }
    })
  )
  ;