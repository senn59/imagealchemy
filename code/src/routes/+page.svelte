<script lang="ts">
    import Sliders from "./sliders.svelte";
    let imageStyle: string; 
</script>

<div class="wrapper">
    <div class="sidebar left">
        <div class="logo">
            <img src="/logo.png" alt="flask">
            <h1>ImageAlchemy</h1>
        </div>
        <div class="sliders">
            <Sliders bind:imageStyle />
        </div>
        <div class="buttons">
            <button>Copy</button>
            <button>Download</button>
        </div>
    </div>
    <img style={imageStyle} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="">
    <div class="sidebar right">
    </div>
</div>


<style lang="scss">
    $grey: #2E2E2E;
    $logoText: #560074;
    $margin: 100px;
    img {
        width: 800px;
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
</style>