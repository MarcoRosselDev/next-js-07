import type { SessionType } from "./SessionType"

export type SessionProps = {
  handleUp: (i: SessionType) => void
  handleDown: (i: SessionType) => void
  count: number
  stop: boolean
}
