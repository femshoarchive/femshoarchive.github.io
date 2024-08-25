<script lang="ts">
    export let name: string;
    export let usd: string;
    export let native: string = "";

    const usdformat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    })
</script>

<div class="p-1 border-2 border-solid rounded-md mb-2 border-slate-800 dark:border-slate-300">
    <h2 class="m-0">{name}</h2>
    <div>
        <h4>{#if parseInt(usd) >= 0}Donated to{:else}Subtracted from{/if} the cause: {usdformat.format(parseFloat(usd))}</h4>
        {#if native != ""}
            <h6 class="text-xs">{native}</h6>
        {/if}
    </div>
</div>