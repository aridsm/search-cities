import React from 'react'

const useVisibility = (ref) => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const visibility = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsVisible(false);
      else setIsVisible(true)
    }
    document.addEventListener('mousedown', visibility);
    return (() => {
      document.removeEventListener('mousedown', visibility)
    })
  }, [ref])

  return {isVisible}
}

export default useVisibility