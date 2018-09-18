import { configure } from '@storybook/riot';
import '../node_modules/todomvc-app-css/index.css'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
