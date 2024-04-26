<script lang="ts">
    import dree from "dree";
</script>

{#each dree.scan('static/art').children as artistdir}
    <h2>{artistdir.name}</h2>
    <div>
        {#each dree.scan(`static/art/${artistdir.name}`).children as art}
            <img src="/art/{artistdir.name}/{art.name}" alt="{art.name}">
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