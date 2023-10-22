<script lang="ts">
    import { imageSource } from "$lib/stores";
    let files: FileList;
    const allowedFormats: string[] = ["image/png", "image/jpeg"]
    let fileInput: HTMLInputElement;

    $: if (files) {
        const file = files[0];
        setImageSource(file)
    }

    const handleDrop = (e: DragEvent) => {
        const files = e.dataTransfer?.files;
        if (!files) return;
        for (const file of e.dataTransfer.files) {
            console.log(file.type);
            if (!allowedFormats.includes(file.type)) continue;
            setImageSource(file);
            return;
        }
    }

    const handleClipboardPaste = (e: ClipboardEvent) => {
        const items = e.clipboardData?.items; 
        if (!items) return;
        for (let i=0; i < items.length; i++) {
            const item: DataTransferItem = items[i];
            if (item.kind == "file" && allowedFormats.includes(item.type)) {
                const file: File | null = item.getAsFile();
                if (!file) return;
                setImageSource(file);
            }
        }
    }

    const setImageSource = (file: File) => {
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
    <form class="box" on:drop|preventDefault={handleDrop} on:dragover|preventDefault >
        <button on:click={() => fileInput.click()} />
        <div class="dashes">
            <h1>Drag & Drop</h1>
            <h2>CTRL - V to paste</h2>
            <h3>Or <span>Browse</span></h3>
            <h4>allowed formats: png, jpeg</h4>
            <input bind:this={fileInput} bind:files={files} type="file" id="image" accept="{allowedFormats.join(",")}">
        </div>
    </form>
</div>

<svelte:window on:paste={handleClipboardPaste}/>

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
    form {
        height: 700px;
        width: 900px;
        background-color: #D9D9D9;
        box-shadow: $grey 0 0 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        button {
            height: 100%;
            width: 100%;
            opacity: 0;
            position: absolute;
            cursor: pointer;
        }
        .dashes{
            width: 96%;
            height: 96%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            outline: 4px dashed $grey;

            text-align: center;
            font-weight: 600;
            color: $grey;
            h1 {
                font-size: 6rem;
            }
            h2 {
                padding: 10px;
                font-size: 3rem;
            }
            h3 {
                font-size: 2rem;
                span {
                    text-decoration: underline;
                    color: blue;
                }
            }
            h4 {
                padding-top: 10px;
                opacity: 0.5;
                font-size: 1.2rem;
            }

            input {
                display: none;
            }
        }
    }
</style>