const happoStatic = require('happo-static');

happoStatic.init();

happoStatic.registerExample({
  component: 'Hello',
  variant: 'red',
  render: () => {
    document.body.innerHTML = '<div style="background-color:red">Hello</div>';
  },
});

happoStatic.registerExample({
  component: 'Hello',
  variant: 'blue',
  render: () => {
    document.body.innerHTML = '<div style="background-color:blue">Hello</div>';
  },
});

happoStatic.registerExample({
  component: 'Hello',
  variant: 'chrome-large only',
  render: () => {
    document.body.innerHTML = '<div style="background-color:yellow">Hello</div>';
  },
  targets: ['chrome-large'],
});
