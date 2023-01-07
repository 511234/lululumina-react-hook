import React, { useState } from 'react'

export const useToggle = (initialState: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialState)
  const toggleValue = () => {
    setValue((value) => !value)
  }
  return [value, toggleValue] as const
}
