<script lang="ts">
    export let name: string = "";
    export let min: number = 0;
    export let max: number = 100;
    export let value = 0;

    let inputEl: HTMLInputElement;
    const progressColor = "#BD00FF";
    const defaultColor = "#BEBEBE";
    //No psuedo element for range progress on chromium so we use js
    $: if (inputEl && !navigator.userAgent.includes("Firefox")) {
        const mappedValue = (value - min) * 100 / (max - min);
        const css = `linear-gradient(to right,
        ${progressColor} 0%, ${progressColor} ${mappedValue}%,
        ${defaultColor} ${mappedValue}%, ${defaultColor} 100%)`;
        inputEl.style.background = css;
    }
</script>

<div class="slider">
    <input bind:this={inputEl} type="range" bind:value id="slider-{name}" min="{min}" max="{max}">
    <label for="range">{name.toUpperCase()}: {value}</label>
</div>

<style lang="scss">
    @import "./colors.scss";
    $track-box-shadow: 
                $grey 0 0 0 4px,
                $grey 2px 2px 0 5px;
    $track-height: 15px;
    $track-border-radius: 10px;
    $track-progress-color: $slider;
    $track-color: $sliderGrey;

    $thumb-height: 30px;
    $thumb-width: 12px;
    $thumb-border-radius: 3px;
    $thumb-color: $slider;
    $thumb-box-shadow: $grey 0 0 0 4px;
    .slider {
        display: flex;
        flex-direction: column-reverse;
        label {
            transform: translateX(3px);
            margin-bottom: 12px;
            font-weight: 800;
            font-size: 18px;
            color: $grey;
        }
    }
    //reset range input default styling
    input[type="range"] {
        -webkit-appearance: none;
        width: 100%;
        background: transparent;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
        }
        &::-moz-range-thumb {
            border: 0;
        }
        &:focus {
            outline: none;
        }
        &::-ms-track {
            width: 100%;
            cursor: pointer;
            background: transparent; 
            border-color: transparent;
            color: transparent;
        }
    }

    //thumb
    input[type="range"] {
        &::-webkit-slider-thumb {
            cursor: ew-resize;
            height: $thumb-height;
            width: $thumb-width;
            border-radius: $thumb-border-radius;
            background: $thumb-color;
            box-shadow: $thumb-box-shadow;
            margin-top: -6px;
        }
        &::-moz-range-thumb {
            cursor: ew-resize;
            height: $thumb-height;
            width: $thumb-width;
            border-radius: $thumb-border-radius;
            background: $thumb-color;
            box-shadow: $thumb-box-shadow;
        }
    }

    //track
    input[type="range"] {
        &::-webkit-slider-runnable-track {
            width: 100%;
            cursor: pointer;
            height: $track-height;
            border-radius: $track-border-radius;
            box-shadow: $track-box-shadow;
            //background set using JS
        }

        &::-moz-range-track, &::-moz-range-progress {
            width: 100%;
            cursor: pointer;
            height: $track-height;
            background: $track-color;
            border-radius: $track-border-radius;
        }
        &::-moz-range-track {
            box-shadow: $track-box-shadow;
        }
        &::-moz-range-progress {
            background: $track-progress-color;
            // border-radius: 10px 0 0 10px;
        }

    }
</style>