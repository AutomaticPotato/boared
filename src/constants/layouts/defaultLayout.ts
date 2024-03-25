import { KeyboardKeyUnits } from '@/enums/KeyboardKeyUnits'
import type { KeyboardKey } from '@/types/KeyboardKey'

export const defaultLayout: KeyboardKey[] = [
  {
    primarySymbol: '`',
    secondarySymbol: '~',
    unit: KeyboardKeyUnits.OneUnit,
    name: 'dead'
  },
  {
    primarySymbol: '1',
    secondarySymbol: '!',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '2',
    secondarySymbol: '@',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '3',
    secondarySymbol: '#',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '4',
    secondarySymbol: '$',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '5',
    secondarySymbol: '%',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '6',
    secondarySymbol: '^',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '7',
    secondarySymbol: '&',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '8',
    secondarySymbol: '*',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '9',
    secondarySymbol: '(',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '0',
    secondarySymbol: ')',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '-',
    secondarySymbol: '_',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '=',
    secondarySymbol: '+',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'Backspace',
    unit: KeyboardKeyUnits.TwoUnits
  },
  {
    primarySymbol: 'Tab',
    unit: KeyboardKeyUnits.OneAndHalfUnits
  },
  {
    primarySymbol: 'q',
    secondarySymbol: 'Q',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'w',
    secondarySymbol: 'W',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'e',
    secondarySymbol: 'E',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'r',
    secondarySymbol: 'R',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 't',
    secondarySymbol: 'T',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'y',
    secondarySymbol: 'Y',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'u',
    secondarySymbol: 'U',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'i',
    secondarySymbol: 'I',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'o',
    secondarySymbol: 'O',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'p',
    secondarySymbol: 'P',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '[',
    secondarySymbol: '{',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: ']',
    secondarySymbol: '}',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '\\',
    secondarySymbol: '|',
    unit: KeyboardKeyUnits.OneAndHalfUnits
  },
  {
    primarySymbol: 'Capslock',
    unit: KeyboardKeyUnits.OneAndThreeQuartersUnits,
    name: 'capslock'
  },
  {
    primarySymbol: 'a',
    secondarySymbol: 'A',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 's',
    secondarySymbol: 'S',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'd',
    secondarySymbol: 'D',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'f',
    secondarySymbol: 'F',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'g',
    secondarySymbol: 'G',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'h',
    secondarySymbol: 'H',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'j',
    secondarySymbol: 'J',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'k',
    secondarySymbol: 'K',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'l',
    secondarySymbol: 'L',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: ';',
    secondarySymbol: ':',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: "'",
    secondarySymbol: '"',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'Enter',
    unit: KeyboardKeyUnits.TwoAndQuarterUnits
  },
  {
    primarySymbol: 'Shift',
    unit: KeyboardKeyUnits.TwoAndQuarterUnits
  },
  {
    primarySymbol: 'z',
    secondarySymbol: 'Z',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'x',
    secondarySymbol: 'X',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'c',
    secondarySymbol: 'C',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'v',
    secondarySymbol: 'V',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'b',
    secondarySymbol: 'B',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'n',
    secondarySymbol: 'N',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'm',
    secondarySymbol: 'M',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: ',',
    secondarySymbol: '<',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '.',
    secondarySymbol: '>',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: '/',
    secondarySymbol: '?',
    unit: KeyboardKeyUnits.OneUnit
  },
  {
    primarySymbol: 'Shift',
    unit: KeyboardKeyUnits.TwoAndThreeQuarterUnits
  },
  {
    primarySymbol: 'Ctrl',
    unit: KeyboardKeyUnits.OneAndQuarterUnits,
    name: 'control'
  },
  {
    primarySymbol: 'Win',
    unit: KeyboardKeyUnits.OneAndQuarterUnits,
    name: 'meta'
  },
  {
    primarySymbol: 'Alt',
    unit: KeyboardKeyUnits.OneAndQuarterUnits
  },
  {
    primarySymbol: 'Space',
    unit: KeyboardKeyUnits.SixAndQuarterUnits,
    name: ' '
  },
  {
    primarySymbol: 'Alt',
    unit: KeyboardKeyUnits.OneAndQuarterUnits
  },
  {
    primarySymbol: 'Win',
    unit: KeyboardKeyUnits.OneAndQuarterUnits,
    name: 'meta'
  },
  {
    primarySymbol: 'Ctrl',
    unit: KeyboardKeyUnits.OneAndQuarterUnits,
    name: 'control'
  }
]
