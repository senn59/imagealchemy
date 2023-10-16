<script lang="ts">
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
        return styles.includes("-1") ? true : false;
    }
    const getRotation = (styles: string): number => {
        if (styles) {
            let rotationString = transformStyle.split(" ")[1].split("(")[1].split(")")[0].slice(0, -3);
            return parseInt(rotationString);
        }
        return 0;
    }
</script>
<button on:click={copy}>Copy</button>
<button on:click={download}>Download</button>