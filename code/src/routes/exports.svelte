<script lang="ts">
    export let filterStyle: string;
    export let transformStyle: string;
    let parsedFilterStyle: string;
    let shouldFlip: boolean = false;
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
        ctx.filter = parsedFilterStyle;
        ctx.clearRect(0,0, canvas.width, canvas.height)
        // ctx.rotate(0);
        if (shouldFlip) {
            ctx.scale(-1, 1);
            ctx.drawImage(imageElement, -canvas.width, 0);
        } else {
            ctx.drawImage(imageElement, 0, 0);
        }
        window.open(canvas.toDataURL(), "image.png");

    }
    const copy = () => {
        console.log("Copy");
    }
    $: {
        if (filterStyle) {
            parsedFilterStyle = filterStyle.split(" ")[1].slice(0, -1).replace(")", ") ");
        }
        if (transformStyle) {
            shouldFlip = transformStyle.includes("-1") ? true : false;
        }
    }
</script>
<button on:click={copy}>Copy</button>
<button on:click={download}>Download</button>