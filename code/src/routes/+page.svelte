<script lang="ts">
    import Slider from "./slider.svelte";

    interface Filter {
        value: number;
        default: number;
        min: number;
        max: number;
        suffix: string;
        cssFunc: string;
    };
   
    /* 
        Object for adding css filter functions. For more info on available filter functions see the below link.
        https://developer.mozilla.org/en-US/docs/Web/CSS/filter
    */
    let filters: {[key: string]: Filter}  = {
        "saturation": {
            value: 100,
            default: 100,
            min: 0,
            max: 500,
            suffix: "%",
            cssFunc: "saturate"
        },
        "hue": {
            value: 0,
            default: 0,
            min: 0,
            max: 360,
            suffix: "deg",
            cssFunc: "hue-rotate"
       },
    };

    let style: string = ""
    $: {
        let styles: Array<string> = [];
        Object.keys(filters).forEach(name => {
            let filter: Filter = filters[name];
            let style: string = `${filter.cssFunc}(${filter.value}${filter.suffix})`;
            styles.push(style);
        })
        style = `filter: ${styles.join("")};`;
    }
</script>

{#each Object.keys(filters) as filter}
    <Slider name={filter} bind:value={filters[filter].value}  min={filters[filter].min} max={filters[filter].max}/>
{/each}

<img style={style} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="">

<style lang="scss">
    img {
        width: 400px;
    }
</style>