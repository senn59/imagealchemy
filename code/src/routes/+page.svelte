<script lang="ts">
    import Sliders from "./sliders.svelte";
    import Toolbar from "./toolbar.svelte";
    let filterStyle: string;
    let transformStyle: string;
    let style: string;
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
            <button>Copy</button>
            <button>Download</button>
        </div>
    </div>
    <div class="middle">
        <img id="edited" style={style} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="">
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
        width: 20%;
        height: 100vh;
        outline: $grey 8px solid;
    }
    .sidebar, .left {
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