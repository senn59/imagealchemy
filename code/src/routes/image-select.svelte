<script lang="ts">
    import { imageSource } from "$lib/stores";
    let files: FileList;
    $: if (files) {
        const file = files[0];
        console.log(file.name);
        const reader = new FileReader();
        reader.onload = (event) => {
            if (typeof reader.result === "string") {
               imageSource.set(reader.result);
            }
        }
        reader.readAsDataURL(file);
    }
</script>

<div class="wrapper">
    <div class="box">
        <div class="dashes">
            <input bind:files={files} type="file" id="image" accept="image/png, image/jpeg">
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
    }
    .box {
        height: 700px;
        width: 900px;
        background-color: #D9D9D9;
        box-shadow: $grey 0 0 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .dashes{
        width: 96%;
        height: 96%;
        outline: 4px dashed $grey;
    }
</style>