import type { ReactNode } from "react"

type Pros = {
  children?: ReactNode
}

const Card = ({children}: Pros) => {
  return (
    <div className="card col">{children}</div>
  )
}
export default Card