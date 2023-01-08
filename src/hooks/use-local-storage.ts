import { useEffect, useState } from 'react'

export const getLsValueByKey = (key: string) => {
  const savedLsStringValue = localStorage.getItem(key)
  return savedLsStringValue && savedLsStringValue !== 'undefined'
    ? JSON.parse(savedLsStringValue)
    : null
}

export const useLocalStorage = (key: string, initialValue = '') => {
  const [value, setValue] = useState(() => getLsValueByKey(key) ?? initialValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue] as const
}
