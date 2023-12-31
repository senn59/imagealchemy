import { writable, type Writable } from "svelte/store";
import type { Filter } from "./types";

export const imageSource: Writable<string> = writable("");
export const filterStyle: Writable<string> = writable("");
export const transformStyle: Writable<string> = writable("");
export const showPopup: Writable<boolean> = writable(false);
/* 
    Object for adding css filter functions. For more info on available filter functions see the below link.
    https://developer.mozilla.org/en-US/docs/Web/CSS/filter
*/
export const filters: Writable<{[key: string]: Filter}>  = writable({
    "saturate": {
        value: 100,
        default: 100,
        min: 0,
        max: 500,
        suffix: "%",
        alias: "saturation"
    },
    "hue-rotate": {
        value: 0,
        default: 0,
        min: 0,
        max: 360,
        suffix: "deg",
        alias: "hue"
    },
    "sepia": {
        value: 0,
        default: 0,
        min: 0,
        max: 100,
        suffix: "%",
        alias: "sepia"
    },
    "brightness": {
        value: 100,
        default: 100,
        min: 50,
        max: 300,
        suffix: "%",
        alias: "brightness"
    },
    "contrast": {
        value: 100,
        default: 100,
        min: 50,
        max: 300,
        suffix: "%",
        alias: "contrast"
    },
})