<script lang="ts">
    import Header from './Header.svelte';
</script>

<Header/>
<section class="w-5/6 m-auto mt-3 p-2 text-black dark:text-slate-200 bg-slate-50 dark:bg-slate-800 rounded-lg drop-shadow-lg shadow-slate-400">
    <slot/>
</section>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>