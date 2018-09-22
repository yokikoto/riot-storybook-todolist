import { mount, tag, storiesOf } from '@storybook/riot';
import { action } from '@storybook/addon-actions';

import '../components/app-header.tag';
import '../components/todo-text-input.tag';

storiesOf('app-header', module)
  .add('default view', () =>
    tag('test', '<div class="todoapp"><app-header add-todo="{ opts.addTodo }"/></div>', '', '', () => { }) &&
    mount('test', { addTodo: action('Add Todo') })
  );
