import type { Preview } from "@storybook/react";
import {themes} from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
      docs: {
      page: null, // Isso define o uso da página de docs padrão
    },
  
  },
};

export default preview;
