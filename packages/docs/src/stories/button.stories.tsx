import { Meta, StoryObj } from '@storybook/react'
import { Buttom, ButtomProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Buttom,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtomProps>

export const Primary: StoryObj<ButtomProps> = {}

export const Big: StoryObj<ButtomProps> = {
  args: { size: 'big' },
}
