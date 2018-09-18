import { mount, storiesOf } from '@storybook/riot';
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
  // <div class="todoapp">を付与したい
  .add('default view', () => mount('app-header', {
    addTodo: action('Add Todo')
  }))
  ;

storiesOf('Footer', module)
  // <div class="todoapp">を付与したい
  .add('default view', () => mount('app-footer', {
    completedCount: 10,
    activeCount: 4,
    filter: 'All',
    onClearCompleted: action('onClearCompleted'),
    onShow: action('onShow')
  }))
  ;