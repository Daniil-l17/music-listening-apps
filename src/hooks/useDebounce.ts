import { useEffect, useState } from "react"


export const useDebounce = (value:string) => {
  const [debounce,setDebounce] = useState('')
  useEffect(() => {
    const time =setTimeout(() => setDebounce(value),400)
    return () => clearTimeout(time)
  },[value])
  return debounce
}