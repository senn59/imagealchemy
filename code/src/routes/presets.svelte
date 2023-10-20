<script lang="ts">
	import { onMount } from "svelte";
    import { filters } from "$lib/stores";

    interface Preset {
        styles: {
            saturate: number; //%
            "hue-rotate": number; //deg
            sepia: number; //%
        };
        css: string;
    }
    //see the "filters" object for more info on the different filters per preset.
    const presets: {[key: string]: Preset} = {
        "preset1": {
            "styles": {
                "saturate": 200,
                "hue-rotate": 50,
                "sepia": 0,
            },
            "css": "",
        }
    }
    let imageSrc: string;
    onMount(() => {
        const imageElement: any = document.getElementById("edited");
        imageSrc = imageElement.src;
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

</script>



<div class="presets">
    {#each Object.keys(presets) as key}
        <div class="preset" id={key}>
            <button on:click={() => applyPreset(key)}>
                <img src="{imageSrc}" alt={key} style="{presets[key].css}"/>
            </button>
            <p>{key[0].toUpperCase() + key.slice(1)}</p>
        </div>
    {/each}
</div>

<style lang="scss">
    @import "./colors";
    .presets {
        button {
            border-radius: 10px;
            border: 0;
            background-color: transparent;
            cursor: pointer;
            img {
                background-color: $grey;
                box-shadow:
                $grey 0 0 0 4px,
                $grey 2px 3px 0 4px;
                width: 250px;
                height: 200px;
                object-fit: cover;
                border-radius: 10px;
            }
        }
        p {
            margin-top: 5px;
            font-weight: bold;
            font-size: 20px;
            color: $grey;
            transform: translateX(8px);
        }
    }
</style>