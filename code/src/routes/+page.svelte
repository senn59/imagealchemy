<script lang="ts">
    import Sliders from "./sliders.svelte";
    import Toolbar from "./toolbar.svelte";
    import Buttons from "./buttons.svelte";
    import Presets from "./presets.svelte";
    import ImageSelect from "./image-select.svelte";
    import { filterStyle, imageSource, transformStyle } from "$lib/stores";
</script>

{#if !$imageSource}
    <div class="image-select">
        <ImageSelect />
    </div>
{/if}
<div class="wrapper">
    <div class="sidebar left">
        <div class="logo">
            <img src="/logo.png" alt="flask">
            <h1>ImageAlchemy</h1>
        </div>
        <div class="sliders">
            <Sliders />
        </div>
        <div class="buttons">
            <Buttons />
        </div>
    </div>
    <div class="middle">
        <img id="edited" style={$filterStyle + $transformStyle} crossorigin="anonymous" src={$imageSource} alt="">
        <div class="toolbar">
            <Toolbar />
        </div>
    </div>
    <div class="sidebar right">
        <h1>Presets</h1>
        <div class="presets">
            <Presets />
        </div>
    </div>
</div>

<style lang="scss">
    @import "./colors.scss";
    $margin: 100px;

    #edited {
        max-width: 75%;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #F4F4F4;
    }
    .sidebar {
        height: 100vh;
        box-shadow: $grey 0 0 0 8px;
        &.left {
            width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: white;
            .logo {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 50px;
                width: 100%;
                h1 {
                    margin-top: 5px;
                    color: $logoText;
                    font-size: 3rem;
                    font-weight: 900;
                }
                img {
                width: 30%;
                }
            }
            .sliders {
                height: 80%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 100px 0 0 0;
            }
            .buttons {
                padding-bottom: 50px;
                width: 80%;
                display: flex;
                margin: 0 auto;
                justify-content: space-between;
            }
        }
        &.right {
            width: 500px;
            h1 {
                font-size: 2.5rem;
                font-weight: 800;
                width: 250px;
                margin: auto;
                padding: 50px 0 40px 0;
                color: $grey;
            }
            .presets {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: calc(100% - (90px + 2.5rem)); 
                overflow: auto;
            }
        }
    }
    .middle {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .toolbar {
            position: absolute;
            bottom: 40px;
            display: flex;
        }
    }
    .image-select {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 5;
    }
</style>