import { ComponentProps } from 'react'
import { styled } from './styles'

export * from './components/box'
export * from './components/text'
export * from './components/heading'

export const Buttom = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: 14,
      },
      big: {
        padding: '$3 $6',
        fontSize: 16,
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export type ButtomProps = ComponentProps<typeof Buttom>
