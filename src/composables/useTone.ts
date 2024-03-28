import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination()

export function useTone() {
  function playNote(note: number) {
    synth.triggerAttackRelease(note, '8n')
  }

  return { playNote }
}
