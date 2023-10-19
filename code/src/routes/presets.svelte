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
    // see "suffix" key in "filters" object for the meaning on the numbers.
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
            for (const [style, value] of Object.entries(presets[preset].styles)) {
                const styleSuffix = $filters[style].suffix;
                styles.push(`${style}(${value}${styleSuffix})`);
            }
            presets[preset].css = `filter: ${styles.join("")}`;
        })
    })
    const applyPreset = (preset: string) => {
        console.log(preset);
    }

</script>



<div class="presets">
    {#each Object.keys(presets) as key}
    <div class="preset" id={key}>
        <img src="{imageSrc}" alt={key} style="{presets[key].css}"/>
        <p>{key}</p>
        <button on:click={() => applyPreset(key)}>apply</button>

    </div>
    {/each}
</div>

<style lang="scss">
    .presets img {
        width: 300px;
    }
</style>