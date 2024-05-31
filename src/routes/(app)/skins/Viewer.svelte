<script lang="ts">
    import {SkinViewer} from "skinview3d";
    import {onMount} from 'svelte';
   
    export let title: string = "";
    export let description: string = "";
    export let file: string = "";
    export let flipped: string = "false";

    let canvas: HTMLCanvasElement;
    let view: SkinViewer;
    
    function onResize() {
        console.log(window.innerWidth, view.camera.position.x)
        if (window.innerWidth < 1000 && view.camera.position.x == (flipped == "true" ? -20 : 20)) {
            view.camera.position.x = 0;
        } else if (window.innerWidth >= 1000 && view.camera.position.x == 0) {
            view.camera.position.x = (flipped == "true" ? -20 : 20);
        }
        view.camera.position.y = 10;
    }

    onMount(() => {
        view = new SkinViewer({
            canvas: canvas,
            width: 450,
            height: 800,
            skin: file,
            fov: 60,
            zoom: 1,
        });
        view.camera.position.x = (flipped == "true" ? -20 : 20);
        onResize()
        window.addEventListener("resize", onResize)
    });
</script>

<div class="{flipped}">
    <div>
        <h2>{title}</h2>
        <span>{description}</span>
    </div>
    <div style="text-align: center;">
        <canvas bind:this={canvas}></canvas>
        <a href="{file}" download="{title}.png">Download</a>
    </div>
</div>

<style>
div {
    display: flex;
    flex: 0 1 auto;
    padding: 10px;
    margin-bottom: 10px;
}

div.true {
    flex-direction: row-reverse;
}

div.false {
    flex-direction: row;
}

div span {
    font-size: 14pt;
    font-weight: 300;
}

div h2 {
    font-size: 24pt;
    font-weight: 500;
}

div div {
    display: initial;
}

div div canvas {
    width: calc(28em / 800 * 450) !important;
    height: 28em !important;
}

@media screen and (max-width: 1000px) {
    div {
        flex-direction: column !important;
        align-items: center !important;
    }
}
</style>