import type { KeyboardKeyUnits } from '@/enums/KeyboardKeyUnits'

export type KeyboardKey = {
  primarySymbol: string
  secondarySymbol?: string
  unit: KeyboardKeyUnits
  name?: string
}
