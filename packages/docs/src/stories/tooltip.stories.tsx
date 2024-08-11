import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@gengarlax-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <Text size="sm">21 de Outubro - Indisponivel</Text>,
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Tooltip>
          <Text size="sm">{Story()}</Text>
        </Tooltip>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
