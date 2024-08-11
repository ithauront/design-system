import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  position: 'relative',

  borderRadius: '$sm',
  backgroundColor: '$gray900',
  width: 'fit-content',
  minWidth: '219px',
  minHeight: '44px',

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
