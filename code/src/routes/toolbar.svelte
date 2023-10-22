<script lang="ts">
    import Icon from "@iconify/svelte";
    import { transformStyle } from "$lib/stores";

    let rotation: number = 0;
    let shouldFlip: boolean = false;

    const defaultColor = "2E2E2E";
    const activeColor = "0667D8"
    let flipIconColor = defaultColor;

    const rotate = () => {
        return;
        const newRotationValue = rotation + 90;
        rotation = newRotationValue == 360 ? 0 : newRotationValue;
    }
    const flip = () => {
        shouldFlip = !shouldFlip;
        flipIconColor = shouldFlip ? activeColor : defaultColor;
    }
    const crop = () => undefined;
    $: {
        let rotationStyle: string = `rotate(${rotation}deg)`;
        let flipStyle: string = shouldFlip ? "scaleX(-1)" : "scaleX(1)";
        transformStyle.set(`transform: ${rotationStyle} ${flipStyle};`);
    }
</script>

<div class="buttons">
    <button on:click={rotate}>
        <Icon icon="tabler:rotate" height="24" color="#2E2E2E70" />
        <span class="tooltip">WIP</span>
    </button>
    <div class="seperator" />
    <button on:click={flip}>
        <Icon icon="material-symbols:flip" height="24" color="#{flipIconColor}" />
    </button>
    <div class="seperator" />
    <button on:click={crop}>
        <Icon icon="material-symbols:crop" height="24" color="#2E2E2E70" />
        <span class="tooltip">WIP</span>
    </button>
</div>

<style lang="scss">
    @import "./colors";
    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 
            $grey 0 0 0 4px,
            $grey 2px 3px 0 6px;
        border-radius: 10px;
        background-color: #D9D9D9;
        button {
            border: 0;
            padding: 0;
            background-color: transparent;
            padding: 4px 8px;
            cursor: not-allowed;
            &:nth-child(3) {
                cursor: pointer;
            }
            &:hover .tooltip {
                display: inline-block;
            }
            .tooltip {
                background-color: $grey;
                padding: 2px 6px;
                border-radius: 5px;
                position: absolute;
                font-size: 1rem;
                top: 10px;
                display: none;
                color: white;
            }
        }
        .seperator {
            width: 5px;
            height: 100%;
            background-color: $grey;
        }
    }
</style>