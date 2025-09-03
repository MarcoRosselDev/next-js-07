import { useState, type ReactNode } from "react"
import type { User } from "../../types/user"
import { LevelContext } from "./LevelContext"

type Props = {
  children?: ReactNode
}

const TestComponent = ({children}: Props) => {

  const [user, setUser] = useState<User>({
    username: "Marco",
    age: 32
  })

  return (
    <LevelContext value={{user, setUser}}>
      {children}
    </LevelContext>
  )
}
export default TestComponent