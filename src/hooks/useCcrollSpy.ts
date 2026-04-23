import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPos) {
          setActiveId(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}