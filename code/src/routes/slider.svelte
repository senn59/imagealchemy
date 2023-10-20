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
    @import "./colors.scss";
    $sliderWidth: 80%;
    //css reset
    input[type="range"] {
        -webkit-appearance: none;
        width: $sliderWidth;
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
            -webkit-appearance: none;
            border: 1px solid #000000;
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #ffffff;
            cursor: pointer;
            margin-top: -14px;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        }
        &::-moz-range-thumb {
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: $slider;
            cursor: pointer;
            box-shadow: $grey 0 0 0 2px;

        }
    }

    //track
    input[type="range"] {
        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            background: #3071a9;
            border-radius: 25px;
            border: 0.2px solid #010101;
        }
        &::-webkit-slider-runnable-track {
            background: yellow;
        }

        &::-moz-range-track, &::-moz-range-progress {
            width: 100%;
            height: 15px;
            cursor: pointer;
            background: $sliderGrey;
            border-radius: 10px;
            box-shadow: $grey 0 0 0 3px;
        }
        &::-moz-range-progress {
            background: $slider;
            // border-radius: 10px 0 0 10px;
        }

    }
</style>