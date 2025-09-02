import { useState, type ReactNode } from "react"
import { LevelContext } from "./LevelContext"
import type { User } from "../../types/user"

type Props = {
  children?: ReactNode
}

const Context = ({children}: Props) => {
  
  const [user, setUser] = useState<User>({
    username: "Marco",
    age: 32
  })

  return (
    <div className="target">
      <LevelContext value={{user, setUser}}>
        {children}
      </LevelContext>
    </div>
  )
}
export default Context