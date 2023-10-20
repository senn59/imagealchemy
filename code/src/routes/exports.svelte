<script lang="ts">
    import Icon from '@iconify/svelte';
    import { filterStyle, transformStyle } from '$lib/stores';

    const download = () => {
        const canvas = getCanvasImage();
        if (!canvas) return;
        window.open(canvas.toDataURL("image/png")) /* for testing purposes */
        // let newWindow: Window | null = window.open();
        // if (newWindow == null) return;
        // newWindow.document.open();
        // newWindow.document.write(`<img src="${canvas.toDataURL("image/png")}">`)
    }

    const copy = () => {
        const canvas = getCanvasImage();
        if (!canvas) return;
        /*
            On Firefox the used clipboard API functions are locked behind "dom.events.asyncClipboard.clipboardItem"
            which is disabled by default.
            https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write#browser_compatibility
            https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem#browser_compatibility
        */
        if (typeof ClipboardItem === "function") {
            canvas.toBlob(function(blob) { 
                if (!blob) return;
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]); 
            });
        } else {
            window.open(canvas.toDataURL("image/png"))
        }
    }

    const getCanvasImage = (): HTMLCanvasElement | undefined => {
        let imageElement: any = document.getElementById("edited");
        let canvas = document.createElement("canvas");
        let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx == null) {
            console.log("bad context")
            return;
        }

        canvas.width = imageElement.naturalWidth;
        canvas.height = imageElement.naturalHeight;

        ctx.filter = getParsedFilters($filterStyle);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.clearRect(0,0, canvas.width, canvas.height);
        if (shouldFlip($transformStyle)) ctx.scale(-1, 1);

        ctx.drawImage(imageElement, -canvas.width/2, -canvas.height/2);
        return canvas;
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
            let rotationString = $transformStyle.split(" ")[1].split("(")[1].split(")")[0].slice(0, -3);
            return parseInt(rotationString);
        }
        return 0;
    }
</script>

<button class="copy" on:click={copy}>
    <span><Icon icon="ph:copy" color="white" height="30" /></span>
    COPY
</button>
<button class="download" on:click={download}>
    <span><Icon icon="material-symbols:download" color="white" height=30 /></span>
    DOWNLOAD
</button>

<style lang="scss">
    @import "./colors";
    button {
        border: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        padding: 2px 10px;
        cursor: pointer;
        box-shadow: 
            $grey 0 0 0 4px,
            $grey 1px 2px 0 6px;
        color: white;
        span {
            padding-right: 10px;
            transform: translateY(2px);
        }
    }
    .copy { background-color: #2BCD27 }
    .download { background-color: #76B2FA }
</style>