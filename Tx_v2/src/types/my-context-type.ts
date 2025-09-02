import type { User } from "./user"

export type MyContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}