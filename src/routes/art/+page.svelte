<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

{#each data.arts as artistdata}
    <h2>{artistdata.artist}</h2>
    <div>
        {#each artistdata.arts as art}
            <img src="/art/{artistdata.artist}/{art}" alt="{art}">
        {/each}
    </div>
{/each}

<style>
div {
    padding: 5px;
    border: 2px solid #000000;
    border-radius: 10px;
    flex-direction: row;
    gap: 10px;
}

div img {
    margin: 5px;
    max-height: 25em;
    border-radius: 10px;
    border: 2px solid #3b3b3b00;
}

@media screen and (max-width: 600px) {
    div {
        flex-direction: column;
        align-items: center;
    }

    div img {
        max-width: calc(100% - 15px);
    }
}

</style>