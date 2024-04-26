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

<div class="donation">
    <h2>{name}</h2>
    <div>
        <h4>{#if parseInt(usd) >= 0}Donated to{:else}Subtracted from{/if} the cause: {usdformat.format(parseFloat(usd))}</h4>
        {#if native != ""}
            <h6>{native}</h6>
        {/if}
    </div>
</div>

<style>
div.donation {
    padding: 10px;
    background-color: #fafafa;
    border: 2px solid #000000;
    border-radius: 10px;
    margin-bottom: 10px;
}

div.donation * {
    margin-block: 0;
}

div.donation div {
    text-align: right;
    font-weight: 600;
}

div.donation div h4 {
    font-size: 14pt;
}
div.donation div h6 {
    font-size: 8pt;
}

div.donation h2 {
    font-weight: 400;
    font-size: 18pt;
}
</style>