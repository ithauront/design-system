import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@gengarlax-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
