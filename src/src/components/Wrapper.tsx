'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Dynamically load the functions.js file on path change
    const script = document.createElement('script')
    script.src = '/assets/js/functions.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup: only remove the script if it is still in the DOM
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [pathname]) // Run effect when pathname changes

  return <>{children}</>
}
