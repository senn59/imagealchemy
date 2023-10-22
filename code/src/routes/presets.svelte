<script lang="ts">
	import { onMount } from "svelte";
    import { filters, imageSource } from "$lib/stores";

    interface Preset {
        styles: {
            saturate: number; //%
            "hue-rotate": number; //deg
            sepia: number; //%
            contrast: number; //%
            brightness: number;
        };
        css: string;
    }
    // saturate: 100,
    // hue-rotate: 0,
    // sepia: 0,
    // contrast: 100
    // brightness 100

    //see the "filters" object for more info on the different filters per preset.
    const presets: {[key: string]: Preset} = {
        "Vintage": {
            "styles": {
                saturate: 150,
                "hue-rotate": 45,
                sepia: 30,
                contrast: 120,
                brightness: 80
            },
            "css": "",
        },
        "Washed": {
            "styles": {
                saturate: 70,
                "hue-rotate": 0,
                sepia: 0,
                contrast: 80,
                brightness: 100
            },
            "css": "",
        },
        "Black & White": {
            "styles": {
                saturate: 0,
                "hue-rotate": 0,
                sepia: 0,
                contrast: 120,
                brightness: 100
            },
            "css": "",
        },
        "Sepia": {
            "styles": {
                saturate: 0,
                "hue-rotate": 0,
                sepia: 100,
                contrast: 100,
                brightness: 100
            },
            "css": "",
        },
    }
    onMount(() => {
        Object.keys(presets).forEach((preset) => {
            let styles: string[] = [];
            for (const [filter, value] of Object.entries(presets[preset].styles)) {
                const filterSuffix = $filters[filter].suffix;
                styles.push(`${filter}(${value}${filterSuffix})`);
            }
            presets[preset].css = `filter: ${styles.join("")}`;
        })
    })
    const applyPreset = (preset: string) => {
        for (const [filter, value] of Object.entries(presets[preset].styles)) {
            $filters[filter].value = value;
        }
    }
    // $: console.log(imageSource);
</script>



<div class="presets">
    {#each Object.keys(presets) as key}
        <div class="preset" id={key}>
            <button on:click={() => applyPreset(key)}>
                <div class="box">
                    {#if $imageSource}
                        <img src="{$imageSource}" alt={key} style="{presets[key].css}"/>
                    {:else}
                    <p>{"<IMAGE>"}</p>
                    {/if}
                </div>
            </button>
            <p>{key[0].toUpperCase() + key.slice(1)}</p>
        </div>
    {/each}
</div>

<style lang="scss">
    @import "./colors";
    .presets {
        .preset {
            padding-bottom: 30px;
            button {
                border-radius: 10px;
                border: 0;
                background-color: transparent;
                cursor: pointer;
                .box {
                    background-color: #BEBEBE;
                    box-shadow:
                    $grey 0 0 0 4px,
                    $grey 2px 3px 0 4px;
                    width: 250px;
                    height: 200px;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    p {
                        opacity: 0.7;
                        font-weight: 600;
                        font-size: 2rem;
                    }
                }
                img {
                    background-color: $grey;
                    width: 250px;
                    height: 200px;
                    object-fit: cover;
                    object-position: top;
                    border-radius: 10px;
                }
            }
            p {
                margin-top: 5px;
                font-weight: bold;
                font-size: 1.3rem;
                color: $grey;
                transform: translateX(8px);
            }
        }
    }
</style>