import { ComponentProps } from 'react'
import { keyframes, styled } from '../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateY(100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

export const Tooltip = styled('div', {
  animation: `${slideIn} 200ms ease-out`,
  position: 'relative',
  padding: '0 $2',
  minWidth: '219px',
  minHeight: '44px',
  width: 'fit-content',

  borderRadius: '$sm',
  backgroundColor: '$gray900',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '$2',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '8px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent',
  },
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Tooltip'
