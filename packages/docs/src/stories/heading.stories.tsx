import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
