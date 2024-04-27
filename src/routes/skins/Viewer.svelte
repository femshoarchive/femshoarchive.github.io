<script lang="ts">
    import {SkinViewer} from "skinview3d";
    import {onMount} from 'svelte';
   
    export let title: string = "";
    export let description: string = "";
    export let file: string = "";
    export let flipped: boolean = false;

    let canvas: HTMLCanvasElement;
    let root: HTMLDivElement;
    let view: SkinViewer;
    
    onMount(() => {
        root.style.flexDirection = flipped ? 'row-reverse' : 'row';
        view = new SkinViewer({
            canvas: canvas,
            width: 450,
            height: 800,
            skin: file,
            fov: 60,
            renderPaused: true
        });
        view.camera.rotation.x = 0;
        view.camera.rotation.y = 0;
        view.camera.rotation.z = 0;
        view.camera.position.x = flipped ? -20 : 20;
        view.camera.position.y = 12;
        view.camera.position.z = 22;
        view.render();
        view.renderPaused = false;
    });
</script>

<div bind:this={root}>
    <div>
        <h2>{title}</h2>
        <span>{description}</span>
    </div>
    <canvas bind:this={canvas}></canvas>
</div>

<style lang="scss">
$height: 28em;
div {
    display: flex;
    flex: 0 1 auto;
    padding: 10px;
    margin-bottom: 10px;
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

div canvas {
    width: calc($height / 800 * 450) !important;
    height: $height !important;
}
</style>