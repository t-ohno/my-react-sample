import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addDecorator(withKnobs);
addDecorator(withInfo);

addParameters({
  options: {
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
