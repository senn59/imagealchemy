<script lang="ts">
    import Slider from "./slider.svelte";

    interface Filter {
        value: number,
        default: number,
        min: number,
        max: number,
        suffix: string
    };
    
    let filters: {[key: string]: Filter}  = {
        "saturation": {
            value: 100,
            default: 100,
            min: 0,
            max: 500,
            suffix: "%",
        },
        "hue": {
            value: 0,
            default: 0,
            min: 0,
            max: 360,
            suffix: "deg"
       },
    };

    let stylesStr: string = ""
    $: {
        let styles: Array<string> = [];
        Object.keys(filters).forEach(filter => {
            let style: string = `--${filter}:${filters[filter].value}${filters[filter].suffix};`;
            styles.push(style);
        })
        stylesStr = styles.join("");
    }
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
{#each Object.keys(filters) as filter}
    <Slider name={filter} bind:value={filters[filter].value}  min={filters[filter].min} max={filters[filter].max}/>
{/each}

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" style="{stylesStr}">
<!-- <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" style="
--saturation:{filters.saturation.value}%;
--hue:{filters.hue.value}deg;
"
> -->

<style>
    img {
        width: 400px;
        filter: 
            saturate(var(--saturation)) 
            hue-rotate(var(--hue));
    }
</style>