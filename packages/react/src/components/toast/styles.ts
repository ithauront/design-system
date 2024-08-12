import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '$3 $5',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  width: '22.5rem',
  height: '5.125rem',
})

export const Title = styled('h2', {
  fontFamily: '$default',
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
  border: 0,
  width: '100%',
})

export const Text = styled('p', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
  border: 0,
  width: '100%',
})

export const CloseButton = styled('button', {
  all: 'unset',
  color: '$gray200',
})

ToastContainer.displayName = 'Toast'
