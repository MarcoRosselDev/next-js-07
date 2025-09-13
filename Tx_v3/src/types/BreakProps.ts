import type { Dispatch, SetStateAction } from "react"
//import type { SessionType } from "./SessionType"

export type BreakProps = {
  //handleUp: (i: SessionType) => void
  //handleDown: (i: SessionType) => void
  stop: boolean
  localBreak: number
  setBreak: Dispatch<SetStateAction<number>>
  setLocalBreak: Dispatch<SetStateAction<number>>
  myBreak: number
}