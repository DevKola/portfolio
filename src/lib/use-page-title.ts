import { useEffect } from 'react'

const BASE = 'Kolade Ayinde — Full-stack Developer'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Kolade Ayinde` : BASE
  }, [title])
}
