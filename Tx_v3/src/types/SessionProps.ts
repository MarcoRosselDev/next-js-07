import type { Dispatch, SetStateAction } from "react"
//import type { SessionType } from "./SessionType"

export type SessionProps = {
  /*   handleUp: (i: SessionType) => void
    handleDown: (i: SessionType) => void */
  stop: boolean
  localSession: number
  setLocalSession: Dispatch<SetStateAction<number>>
  setCount: Dispatch<SetStateAction<number>>
}
