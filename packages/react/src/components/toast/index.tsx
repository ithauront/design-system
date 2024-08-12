import { X } from 'phosphor-react'
import { CloseButton, Title, ToastContainer, Text } from './styles'
import { ComponentProps, useState } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  text: string
}

export const Toast = ({ title, text }: ToastProps) => {
  const [isVisible, setIsvisible] = useState(true)

  const handleClose = () => {
    setIsvisible(false)
  }

  if (!isVisible) {
    return null
  }
  return (
    <ToastContainer>
      <div>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </div>
      <CloseButton onClick={handleClose}>
        <X weight="bold" size={20} />
      </CloseButton>
    </ToastContainer>
  )
}
