import { Meta, StoryObj } from '@storybook/react'
import { Box, Multistep, MultistepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi step',
  component: Multistep,
  args: {
    size: 4,
    curentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {
  args: {},
}

export const Full: StoryObj<MultistepProps> = {
  args: {
    curentStep: 4,
  },
}
