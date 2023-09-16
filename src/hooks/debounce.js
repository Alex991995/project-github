import {useState, useEffect} from 'react';

function useDebounce(value, delay) {
  const [ debounced, setDebounced] = useState('')

  useEffect(() => {
    const timerId = setTimeout(()=> setDebounced(value),delay)
    return () => clearTimeout(timerId)
  }, [value,delay])

  return debounced
}

export default useDebounce;