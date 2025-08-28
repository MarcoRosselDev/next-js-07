import { useEffect, useState } from "react"

const FxHook = <T,>(url: string) => {
  const [Er, setEr] = useState<null | string>(null)
  const [data, setData] = useState<null | T>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("404 we can not found wath do you loking for!")
        return response.json()
      })
      .then((json: T) => setData(json))
      .catch((e: unknown) => {
        if (e instanceof Error) return setEr(e.message)
        setEr("dangerous error!")
      })
      .finally(() => setLoading(false))
  }, [url])
  // I don´t undestand whi url is required as a dependenci for the useEffect
  // I mean, I know it's something that can change but why it's required also? 

  return { data, loading, Er }

}
export default FxHook