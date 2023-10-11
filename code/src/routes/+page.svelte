<script lang="ts">
    import Slider from "./slider.svelte";

    interface Filter {
        value: number,
        default: number,
        min: number,
        max: number,
        suffix: string
    };
   
   /*
        Filter names must follow the CSS filter option names as seen below.
        https://developer.mozilla.org/en-US/docs/Web/CSS/filter
   */
    let filters: {[key: string]: Filter}  = {
        "saturate": {
            value: 100,
            default: 100,
            min: 0,
            max: 500,
            suffix: "%",
        },
        "hue-rotate": {
            value: 0,
            default: 0,
            min: 0,
            max: 360,
            suffix: "deg"
       },
    };

    let style: string = ""
    $: {
        let styles: Array<string> = [];
        Object.keys(filters).forEach(filter => {
            let style: string = `${filter}(${filters[filter].value}${filters[filter].suffix})`;
            styles.push(style);
        })
        style = `filter: ${styles.join("")};`;
    }
</script>

{#each Object.keys(filters) as filter}
    <Slider name={filter} bind:value={filters[filter].value}  min={filters[filter].min} max={filters[filter].max}/>
{/each}

<img style={style} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="">

<style>
    img {
        width: 400px;
    }
</style>