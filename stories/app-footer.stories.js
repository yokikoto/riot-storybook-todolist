import { mount, tag, storiesOf } from '@storybook/riot';
import { action } from '@storybook/addon-actions';

import '../components/app-footer.tag';

storiesOf('app-footer', module)
  .add('default view', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="10" active-count="4" filter="All" on-clear-completed="{ opts.onClearCompleted }" on-show="{ opts.onShow }"/></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('show completed', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 4 }" filter="Completed" on-clear-completed="{ opts.onClearCompleted }" on-show="{ opts.onShow }"/></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('show active', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 4 }" filter="Active" on-clear-completed="{ opts.onClearCompleted }" on-show="{ opts.onShow }"/></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('no items', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 0 }" filter="All" on-clear-completed="{ opts.onClearCompleted }" on-show="{ opts.onShow }"/></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  .add('only one', () =>
    tag('test', '<div class="todoapp"><app-footer completed-count="{ 10 }" active-count="{ 1 }" filter="All" on-clear-completed="{ opts.onClearCompleted }" on-show="{ opts.onShow }"/></div>', '', '', () => { }) &&
    mount('test', {
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow')
    })
  )
  ;
