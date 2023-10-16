<script lang="ts">
    import Icon from '@iconify/svelte';
    export let filterStyle: string;
    export let transformStyle: string;

    const download = () => {
        let imageElement: any = document.getElementById("edited");
        let canvas = document.createElement("canvas");
        let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx == null) {
            console.log("bad context")
            return;
        }
        canvas.width = imageElement.naturalWidth;
        canvas.height = imageElement.naturalHeight;
        ctx.filter = getParsedFilters(filterStyle);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.clearRect(0,0, canvas.width, canvas.height);

        if (shouldFlip(transformStyle)) ctx.scale(-1, 1);
        ctx.drawImage(imageElement, -canvas.width/2, -canvas.height/2);
        window.open(canvas.toDataURL("image/png"))
        // let newWindow: Window | null = window.open();
        // if (newWindow == null) return;
        // newWindow.document.open();
        // newWindow.document.write(`<img src="${canvas.toDataURL("image/png")}">`)
    }
    const copy = () => {
        console.log("Copy");
    }
    const getParsedFilters = (styles: string): string => {
        if (styles) {
            return styles.split(" ")[1].slice(0, -1).replace(")", ") ");
        }
        return ""
    }
    const shouldFlip = (styles: string): boolean => {
        if (styles) return styles.includes("-1") ? true : false;
        return false;
    }
    const getRotation = (styles: string): number => {
        if (styles) {
            let rotationString = transformStyle.split(" ")[1].split("(")[1].split(")")[0].slice(0, -3);
            return parseInt(rotationString);
        }
        return 0;
    }
</script>

<button class="copy" on:click={copy}>
    <span><Icon icon="ph:copy" color="white" height="30" /></span>
    Copy
</button>
<button class="download" on:click={download}>
    <span><Icon icon="material-symbols:download" color="white" height=30 /></span>
    Download
</button>

<style lang="scss">
    $outline: #2E2E2E;
    button {
        border: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        padding: 2px 10px;
        cursor: pointer;
        box-shadow: 
            $outline 0 0 0 4px,
            $outline 1px 2px 0 6px;
        color: white;
        span {
            padding-right: 10px;
            transform: translateY(2px);
        }
    }
    .copy { background-color: #2BCD27 }
    .download { background-color: #76B2FA }
</style>