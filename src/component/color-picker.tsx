import iro from '@jaames/iro'
import React, { useEffect, useRef } from 'react'

interface ColorPickerProps {
  setColor?: (color: string) => void
  color?: string
  styleProps?: {
    width?: number
    borderWidth?: number
    borderColor?: string
  }
}

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  ({ setColor, color, styleProps }, ref: any) => {
    const colorPicker = useRef<iro.ColorPicker | null>(null)
    const { width, borderWidth, borderColor } = styleProps || {
      width: 250,
      borderWidth: 1,
      borderColor: '#fff',
    }

    useEffect(() => {
      const cp = (colorPicker.current = iro.ColorPicker(ref?.current, {
        width: width,
        color,
        borderWidth: borderWidth,
        borderColor: borderColor,
        layout: [
          {
            component: iro.ui.Box,
          },
          {
            component: iro.ui.Slider,
            options: {
              id: 'hue-slider',
              sliderType: 'hue',
            },
          },
        ],
      }))

      cp.on('input:change', (color: iro.Color) => {
        if (setColor) setColor(color.hexString)
      })

      cp.on('input:end', (color: iro.Color) => {
        if (setColor) setColor(color.hexString)
      })
    }, [])

    colorPicker.current?.color?.set(color as string)

    return <div className="color-picker-container" ref={ref} />
  },
)
ColorPicker.displayName = 'ColorPicker'
export default ColorPicker
