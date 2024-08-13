import { X } from 'phosphor-react'
import { CloseButton, Title, ToastContainer, Text } from './styles'
import { ComponentProps, useEffect, useState } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  text: string
  duration?: number
}

export const Toast = ({ title, text, duration = 5000 }: ToastProps) => {
  const maxTitleLength = 25
  const maxTextLength = 50

  const truncatedTitle =
    title.length > maxTitleLength
      ? title.substring(0, maxTitleLength) + '...'
      : title

  const truncatedText =
    text.length > maxTextLength
      ? text.substring(0, maxTextLength) + '...'
      : text

  const [isVisible, setIsVisible] = useState(true)
  const [isRemoved, setIsRemoved] = useState(false)

  const handleClose = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (duration !== Infinity) {
      const timer = setTimeout(() => setIsVisible(false), duration)

      return () => clearTimeout(timer)
    }
  }, [duration])

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => setIsRemoved(true), 180) // I put 180 to ensure that the component does not go back to initial state  before disappearing. 20miliseconds less than total time of animation is suficient to give the ilusion that the animation go all the way
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  if (isRemoved) {
    return null
  }
  return (
    <ToastContainer data-state={isVisible ? 'visible' : 'hidden'}>
      <div>
        <Title>{truncatedTitle}</Title>
        <Text>{truncatedText}</Text>
      </div>
      <CloseButton onClick={handleClose}>
        <X weight="bold" size={20} />
      </CloseButton>
    </ToastContainer>
  )
}
