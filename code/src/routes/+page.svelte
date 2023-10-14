<script lang="ts">
    import Sliders from "./sliders.svelte";
    import Toolbar from "./toolbar.svelte";
    import Exports from "./exports.svelte";
    let filterStyle: string;
    let transformStyle: string;
    let style: string;
    let imageElement: HTMLImageElement;
    $: style = filterStyle + transformStyle;
</script>
<div class="wrapper">
    <div class="sidebar left">
        <div class="logo">
            <img src="/logo.png" alt="flask">
            <h1>ImageAlchemy</h1>
        </div>
        <div class="sliders">
            <Sliders bind:filterStyle />
        </div>
        <div class="buttons">
            <Exports />
        </div>
    </div>
    <div class="middle">
        <img bind:this={imageElement} id="edited" style={style} crossorigin="anonymous" src="https://www.getpushing.com/wp-content/uploads/2016/10/camera-960x640.jpg" alt="">
        <div class="toolbar">
            <Toolbar bind:transformStyle />
        </div>
    </div>
    <div class="sidebar right">
    </div>
</div>


<style lang="scss">
    $grey: #2E2E2E;
    $logoText: #560074;
    $margin: 100px;
    #edited {
        width: 100%;
        max-width: 55%;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #F4F4F4;
    }
    .sidebar {
        width: 30%;
        height: 100vh;
        outline: $grey 8px solid;
    }
    .left {
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
                color: #560074;
                font-size: 48px;
                font-weight: 900;
            }
            img {
            width: 30%;
            }
        }
        .sliders {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 50px 0;
        }
        .buttons {
            padding-bottom: 50px;
            width: 100%;
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
            bottom: 10%;

        }
    }
</style>