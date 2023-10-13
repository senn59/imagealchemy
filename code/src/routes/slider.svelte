<script lang="ts">
    export let name: string = "";
    export let min: number = 0;
    export let max: number = 100;
    export let value = 0;
</script>

<h2>{value}</h2>
<div class="slider">
    <input type="range" bind:value id="slider-{name}" min="{min}" max="{max}">
    <label for="range">{name}</label>
</div>

<style lang="scss">

</style>