import { colors } from '@gengarlax-ui/tokens'
import { getContrast } from 'polished'

export function ColorGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#FFF',
            fontFamily: 'monospace',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
