import { useEffect, useState } from "react"

const useFetchTx = <T,>(url: string) => {
  const [data, setData] = useState<null | T>(null)
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error("404 we have a problem founding your information!")
      })
      .then((obj: T) => setData(obj))
      .catch((e: unknown) => {
        if (e instanceof Error) return setError(e.message)
        setError("something more problematic was wrong")
      })
      .finally(() => setLoading(false))
  }, [url])
  return { data, loading, error }
}
export default useFetchTx