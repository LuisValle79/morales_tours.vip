"use client"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"

export default function AnalyticsWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return <Analytics />
}