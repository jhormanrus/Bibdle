import type { Letter } from 'src/interfaces/letter'
import { writable, type Writable } from 'svelte/store'

export const view: Writable<'board' | 'result' | 'help'> = writable('board')
export const words: Writable<Letter[][] | undefined[][]> = writable([])
export const gameOver: Writable<boolean> = writable(false)