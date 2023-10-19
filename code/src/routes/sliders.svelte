<script lang="ts">
    import Slider from "./slider.svelte";
    import { filterStyle, filters } from "$lib/stores";
    import type { Filter } from "$lib/types";
    $: {
        let styles: Array<string> = [];
        Object.keys($filters).forEach(name => {
            let filter: Filter = $filters[name];
            let style: string = `${name}(${filter.value}${filter.suffix})`;
            styles.push(style);
        })
        filterStyle.set(`filter: ${styles.join("")};`)
    }
</script>
{#each Object.entries($filters) as [name, filter]}
    <Slider name={filter.alias} bind:value={$filters[name].value}  min={filter.min} max={filter.max}/>
{/each}