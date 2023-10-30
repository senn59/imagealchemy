<script lang="ts">
    import Icon from '@iconify/svelte';
    import { showPopup } from '$lib/stores';
    const closeHandler = (e: Event) => {
        showPopup.set(false);
        localStorage.setItem("popup", "false");
    }
</script>
<div class="wrapper">
    <div class="box">
        <div>
            <div class="close">
                <button on:click={closeHandler}><Icon icon="octicon:x-12" height=34 /></button>
            </div>
            <h1>Welcome to ImageAlchemy! <span><img src="/logo.png" alt="logo"></span></h1>
            <p>
                ImageAlchemy is an online image editing tool supporting pasting and copying options ensuring you don't necessarily need to download an image before editing it.
                ImageAlchemy provides editable filter presets for images and a flip function with a rotate and crop function coming.
            </p>
            <img class="preview" src="/preview.png" alt="website preview">
        </div>
    </div>
</div>
<style lang="scss">
    @import "./colors.scss";
    .wrapper {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        .box {
            width: 50%;
            height: fit-content;
            background-color: white;
            box-shadow: $grey 0 0 0 6px;
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 50px;
            position: relative;
            h1 {
                font-size: 3rem;
                font-weight: 800;
                img {
                    height: 2.2rem;
                    position: relative;
                    top: 8px;
                }
            }
            p {
                font-size: 1.3rem;
                font-weight: 500;
                padding: 20px 0 26px 0;
            }
            & > div > img {
                width: calc(100% - 12px);
                box-shadow: $grey 0 0 0 6px;
            }
            .close {
                position: absolute;
                right: -15px;
                top: -15px;
                button {
                    border: 0;
                    background-color: red;
                    padding: 6px;
                    border-radius: 50px;
                    box-shadow: black 0 0 0 6px;
                    cursor: pointer;
                }
            }
        }
    }
</style>