<script lang="ts">
    import Slider from "./slider.svelte";
    
    let values: {[key: string]: number}  = {
        "saturation": 100,
        "hue": 50,
    }
    const handleChange = (event: CustomEvent<{name: string, value: number}> ) => {
        const key = event.detail.name;
        const value = event.detail.value;
        values[key] = value;
        console.log(values);
    }
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<Slider on:rangeChange={handleChange} name="saturation" value={values["saturation"]}  min={0} max={500}/>
<Slider on:rangeChange={handleChange} name="hue" value={0}  min={0} max={360}/>

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" style="
--saturation:{values.saturation}%;
--hue:{values.hue}deg;
"
>

<style>
    img {
        width: 400px;
        filter: 
            saturate(var(--saturation)) 
            hue-rotate(var(--hue));
    }
</style>