<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher<{"rangeChange": {name: string, value: number}}>();
    export let name: string = "";
    export let min: number = 0;
    export let max: number = 100;
    export let value = 0;
    const handleInput = () => {
        dispatch("rangeChange", {name: name, value: value})
    }
</script>

<h2>{value}</h2>
<div class="slider">
    <input type="range" bind:value on:input={handleInput} id="slider-{name}" min="{min}" max="{max}">
    <label for="range">{name}</label>
</div>

<style lang="scss">

</style>