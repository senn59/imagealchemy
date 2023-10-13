<script lang="ts">
    import Sliders from "./sliders.svelte";
    let imageStyle: string; 
</script>

<div class="wrapper">
    <div class="sidebar left">
        <Sliders bind:imageStyle />
    </div>
    <img style={imageStyle} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="">
    <div class="sidebar right">
    </div>
</div>


<style lang="scss">
    $grey: #2E2E2E;
    * {
        margin: 0;
        padding: 0;
    }
    img {
        width: 800px;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sidebar {
        width: 20%;
        height: 100vh;
    }
    .left {
        border-right: #2E2E2E solid 5px;
    }
    .right {
        border-left: #2E2E2E solid 5px;
        opacity: 100;
    }
</style>