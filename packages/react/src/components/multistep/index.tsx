import { Label, MultistepContainer, Step, Steps } from './styles'

export interface MultistepProps {
  size: number
  curentStep?: number
}

export function Multistep({ size, curentStep = 1 }: MultistepProps) {
  return (
    <MultistepContainer>
      <Label>
        Passo {curentStep} de {size}
      </Label>
      <Steps css={{ '--step-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={curentStep >= step} />
        })}
      </Steps>
    </MultistepContainer>
  )
}
