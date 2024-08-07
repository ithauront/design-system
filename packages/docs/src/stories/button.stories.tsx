import { Meta, StoryObj } from '@storybook/react'
import { Buttom, ButtomProps } from '@gengarlax-ui/react'
import { ArrowRight } from 'phosphor-react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Form/Button',
  component: Buttom,
  args: {
    children: 'Send',
    onClick: action('clicked'),
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtomProps>

export const Primary: StoryObj<ButtomProps> = {}

export const Secondary: StoryObj<ButtomProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtomProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtomProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtomProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtomProps> = {
  args: {
    disabled: true,
  },
}
