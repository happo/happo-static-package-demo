const examples = [
  {
    component: 'Hello',
    variant: 'red',
    render: () => {
      document.body.innerHTML = '<div style="background-color:red">Hello</div>';
    },
  },
  {
    component: 'Hello',
    variant: 'blue',
    render: () => {
      document.body.innerHTML = '<div style="background-color:blue">Hello</div>';
    },
  }
];

let currentIndex = 0;

window.happo = window.happo || {};

window.happo.initChunk = () => {};
window.happo.nextExample = () => {
  const current = examples[currentIndex];
  if (!current) {
    return;
  }
  current.render();
  currentIndex++;
  return { component: current.component, variant: current.variant };
};
