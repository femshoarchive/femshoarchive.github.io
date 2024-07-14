<script lang="ts">
    import Header from './Header.svelte';
    import "../../app.css";
</script>

<section class="absolute top-24 left-[8.333%] w-5/6 m-auto mt-3 p-2 text-black dark:text-slate-200 bg-slate-50 dark:bg-slate-800 rounded-lg drop-shadow-lg shadow-slate-400">
    <slot/>
</section>
<Header/>