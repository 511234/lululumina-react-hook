import React, { useEffect, useState } from 'react'

export const getLsValueByKey = (key: string, initialValue: string) => {
  const savedLsStringValue = localStorage.getItem(key)
  return savedLsStringValue ? JSON.parse(savedLsStringValue) : initialValue
}

export const useLocalStorage = (key: string, initialValue = '') => {
  const [value, setValue] = useState(() => getLsValueByKey(key, initialValue) ?? '')

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])
  return [value, setValue] as const
}
