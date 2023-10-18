import { writable, type Writable } from "svelte/store";

export const filterStyle: Writable<string> = writable("");
export const transformStyle: Writable<string> = writable("");