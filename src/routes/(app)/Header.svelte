<script lang="ts">
    import Fa from 'svelte-fa'
    import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
    import { faGithub } from '@fortawesome/free-brands-svg-icons';    
    import { onMount } from 'svelte';

    let icon = faSun;
    function toggleColors() {
        localStorage.setItem('theme', localStorage.getItem('theme') == 'true' ? 'false' : 'true');
        const html = document.getElementsByTagName("html")[0];
        html.className = localStorage.getItem('theme') == 'true' ? 'dark' : '';
        icon = localStorage.getItem('theme') == 'true' ? faMoon : faSun;
    }

    onMount(() => {
        const html = document.getElementsByTagName("html")[0];
        html.className = localStorage.getItem('theme') == 'true' ? 'dark' : '';
        icon = localStorage.getItem('theme') == 'true' ? faMoon : faSun;
    });
</script>

<header class="flex flex-grow justify-between bg-slate-50 dark:bg-slate-800 drop-shadow-lg shadow-slate-400 rounded-b-lg p-2">
    <a class="flex flex-row" href="/">
        <img class="w-16 sm:w-20 h-16 sm:h-20" src="/shoun.png" alt="">
        <div class="flex-initial invisible sm:visible">
            <h1 class="text-2xl font-semibold">FemSho Archive</h1>
            <h3>Place for all things FemSho!</h3>
        </div>
    </a>
    <!--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_topnav_centered-->
    <nav class="flex flex-row absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {#each [
            {'url': '/', 'name': 'Home'},
            {'url': 'https://www.youtube.com/playlist?list=PLlGlAjsnlGmHkkoPqdZmpg0gHdVjkeOlr', 'name': 'Streams'},
            {'url': '/art', 'name': 'Art'},
            {'url': 'https://www.youtube.com/watch?v=cfs263JGmgE', 'name': 'Delta Time\'s Video'},
            {'url': '/fund', 'name': 'Femboy Fund'},
            {'url': '/skins', 'name': 'Minecraft Skins'},
        ] as route}
            <a class="text-xl ml-2 shadow-slate-500 drop-shadow-sm m-1 hover:underline underline-offset-4" href="{route.url}">{route.name}</a>
        {/each}
    </nav>
    <div class="flex flex-row align-middle justify-center">
        <button class="ml-3 mr-5" on:click={toggleColors}><Fa icon={icon} scale=2 translateY=0.2/></button>
        {#each [
            {'url': 'https://github.com/femshoarchive/femshoarchive.github.io', 'icon': faGithub}
        ]
        as route}
            <button class="ml-3 mr-5"><a href="{route.url}"><Fa icon={route.icon} scale=2 translateY=0.2/></a></button>
        {/each}
    </div>
</header>