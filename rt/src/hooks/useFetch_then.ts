import { useEffect, useState } from "react"

const useFetchT = <T,>(url: string) => {

  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | T>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("404 something go wrong")
      })
      .then((d: T) => {
        setData(d)
      }) // d = data
      .catch((e: unknown) => {
        if (e instanceof Error) {
          return setError(e.message)
        }
        setError("algo mas grave paso")
      }) // e = error
      .finally(() => {
        setLoading(false)
      })
  }, [url])
  return { data, loading, error }
}

export { useFetchT }



/* useEffect(() => {
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

return { data, loading, error } */