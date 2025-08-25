import { useEffect, useState } from "react"

const useFetchS = <T,>(url: string) => {
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | T>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("404 not found")
        const json: T = await response.json()
        setData(json)
      } catch (e) {
        if (e instanceof Error) setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}

export { useFetchS }