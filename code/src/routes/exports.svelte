<script lang="ts">
	import { onMount } from "svelte";

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
        ctx.scale(-1, 1);
        ctx.filter = "sepia(1)";
        // ctx.clearRect(0,0, canvas.width, canvas.height)
        // ctx.rotate(0);
        console.log(imageElement.naturalWidth);
        console.log(imageElement.naturalHeight);
        ctx.drawImage(imageElement, -canvas.width, 0);
        window.open(canvas.toDataURL());

    }
    const copy = () => {
        console.log("Copy");
    }
</script>
<button on:click={copy}>Copy</button>
<button on:click={download}>Download</button>