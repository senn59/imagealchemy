<script lang="ts">
    export let transformStyle: string = "";
    let rotation: number = 0;
    let shouldFlip: boolean = false;

    const rotate = () => {
        const newRotationValue = rotation + 90;
        rotation = newRotationValue == 360 ? 0 : newRotationValue;
    }
    const flip = () => {
        //TODO: indicator for if flipped on toolbar css
        shouldFlip = !shouldFlip;
        console.log("Flip: " + shouldFlip);

    }
    const crop = () => {
        //To be implemented
        console.log("Crop");
    }
    $: {
        let flipStyle: string = "scaleX(1)";
        let rotationStyle: string = `rotate(${rotation}deg)`;
        if (shouldFlip) {
            flipStyle = "scaleX(-1)";
        }
        transformStyle = `transform: ${rotationStyle} ${flipStyle};`;
        console.log(transformStyle)
    }
</script>

<div>
    <button on:click={rotate}>R</button>
    <button on:click={flip}>F</button>
    <button on:click={crop}>C</button>
</div>

<style lang="scss">

</style>