import {useEffect, useState} from 'react'

const useDebounce = (text : string, delay : number) => {
    const [debounceText, setDebounceText] = useState<string>('')
    useEffect(() => {
       const timer = setTimeout(() => {
           setDebounceText(text)
       }, delay)

        return () => {
           clearTimeout(timer)
        }
    },[text, delay])
    return debounceText
}

export default useDebounce