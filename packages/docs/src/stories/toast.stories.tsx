import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@gengarlax-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Devemos passar o titulo e o texto da notificação. A duration é a quantidade de tempo que o toast vai ficar em tela antes de desaparecer o padrão definido no componente é de 5 segundos. Uma vez desmontado o componente não aparece novamente.',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const InifiteDuration: StoryObj<ToastProps> = {
  args: {
    duration: Infinity,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Nesse story passamos duration como infinity para que o Toast permaneça em tela até que o butão de fechar seja clicado.',
      },
    },
  },
}

export const LongText: StoryObj<ToastProps> = {
  args: {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt est quia ex quos vero nemo tempore veniam ipsum repellat itaque odit reprehenderit dignissimos, amet cupiditate sit! Quasi, illo deserunt.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt est quia ex quos vero nemo tempore veniam ipsum repellat itaque odit reprehenderit dignissimos, amet cupiditate sit! Quasi, illo deserunt.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Nesse story simulamos titulo e texto grandes demais. o ideal para o uso de um toast é ter titulo e texto sucintos, porem caso seja impossivel manter no maximo de caracteres definidos(25 para titulo e 50 para texto) nos iremos cortar o escedente e adicionar reticencias ao final',
      },
    },
  },
}
