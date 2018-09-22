import { mount, tag, storiesOf } from '@storybook/riot';
import { action } from '@storybook/addon-actions';

import '../components/todo-item.tag';

storiesOf('todo-item', module)
  .add('not completed', () =>
    tag('test', '<div class="todoapp"><div class="todo-list"><todo-item todo="{ opts.todo }" edit-todo="{ opts.editTodo }" delete-todo="{ opts.deleteTodo }" complete-todo="{ opts.completeTodo }"/></div></div>', '', '', () => { }) &&
    mount('test', {
      todo: {
        id: 'not-completed-id', text: 'Hello Todo', completed: false
      },
      editTodo: action('editTodo'),
      deleteTodo: action('deleteTodo'),
      completeTodo: action('completeTodo')
    })
  )
  .add('completed', () =>
    tag('test', '<div class="todoapp"><div class="todo-list"><todo-item todo="{ opts.todo }" edit-todo="{ opts.editTodo }" delete-todo="{ opts.deleteTodo }" complete-todo="{ opts.completeTodo }"/></div></div>', '', '', () => { }) &&
    mount('test', {
      todo: {
        id: 'completed-id', text: 'Hello Todo', completed: true
      },
      editTodo: action('editTodo'),
      deleteTodo: action('deleteTodo'),
      completeTodo: action('completeTodo')
    })
  )
  ;
