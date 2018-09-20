import { mount, tag, storiesOf } from '@storybook/riot';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable-next-line import/no-webpack-loader-syntax */
import MyButtonRaw from 'raw-loader!./MyButton.tag';
import './MyButton.tag';
import './Welcome.tag';
import './todo-text-input.tag';
import './app-header.tag';
import './app-footer.tag';

storiesOf('Welcome', module).add('to Storybook', () =>
  mount('welcome', { showApp: () => linkTo('Button') })
);

storiesOf('Button', module)
  .add('with text', () => ({
    tags: ['<my-button>Hello Button</my-button>'],
  }))
  .add('with scenario', () => ({
    tags: [{ content: MyButtonRaw, boundAs: 'MyButton' }],
    template: '<MyButton>With scenario</MyButton>',
  }))
  .add('with some emoji', () => ({
    tags: ['<my-button>😀 😎 👍 💯</my-button>'],
  }));


storiesOf('Header', module)
  .add('default view', () =>
    tag('test', '<div class="todoapp"><app-header add-todo="{ opts.addTodo }"></app-header></div>', '', '', () => { }) &&
    mount('test', { addTodo: action('Add Todo') })
  );

storiesOf('Footer', module)
  .add('default view2', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="10" active-count="4" filter="All" on-clear-completed="{ onClearCompleted }" on-show="{ onShow }"></app-footer></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('show completed', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 4 }" filter="Completed" on-clear-completed="{ onClearCompleted }" on-show="{ onShow }"></app-footer></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('show active', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 4 }" filter="Active" on-clear-completed="{ onClearCompleted }" on-show="{ onShow }"></app-footer></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('no items', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 0 }" filter="All" on-clear-completed="{ onClearCompleted }" on-show="{ onShow }"></app-footer></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('only one', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 1 }" filter="All" on-clear-completed="{ onClearCompleted }" on-show="{ onShow }"></app-footer></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  ;