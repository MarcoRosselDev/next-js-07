import type { SessionType } from "./SessionType"

export type BreakProps = {
  handleUp: (i: SessionType) => void
  handleDown: (i: SessionType) => void
  myBreak: number
  stop: boolean
}