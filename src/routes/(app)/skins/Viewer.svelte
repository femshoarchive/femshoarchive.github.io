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
        view.camera.position.x = (flipped == 'true' ? -20 : 20);
        onResize()
        window.addEventListener('resize', onResize)
    });
</script>

<div class="flex flex-column {flipped === 'true' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-initial p-2 mb-2.5">
    <div>
        <h2 class="text-xl">{title}</h2>
        <span>{description}</span>
    </div>
    <div class="text-center">
        <canvas bind:this={canvas}></canvas>
        <a class="italic underline underline-offset-auto" href="{file}" download="{title}.png">Download</a>
    </div>
</div>

<style>
div div canvas {
    width: calc(28em / 800 * 450) !important;
    height: 28em !important;
}
</style>