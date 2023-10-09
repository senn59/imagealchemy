<script lang="ts">
    export let name: string = "";
    export let min: number = 0;
    export let max: number = 100;

    let value = 0;
    const handleDrag = () => {
        console.log(value)
    }
</script>

<h2>{value}</h2>
<div class="slider">
    <input type="range" bind:value on:input={handleDrag} id="slider-{name}" min="{min}" max="{max}">
    <label for="range">{name}</label>
</div>

<style lang="scss">
    /* .slider-slider {
        width: 100px;
        height: 10px;
        background: black;
    }
    .slider-hover {
        height: 20px;
        width: 10px;
        background-color: yellow;
        cursor: ew-resize;
    } */
</style>