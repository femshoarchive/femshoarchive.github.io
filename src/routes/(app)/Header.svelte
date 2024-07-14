<script lang="ts">
    import Fa from 'svelte-fa'
    import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons'
    import { faGithub } from '@fortawesome/free-brands-svg-icons';    
    import { onMount } from 'svelte'; 

    let innerWidth: number;
    //@ts-ignore
    $:menuOpen = innerWidth > 768 ? false : menuOpen;

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

<svelte:window bind:innerWidth={innerWidth}/>

<header class="absolute top-0 w-full flex flex-grow justify-between bg-slate-50 dark:bg-slate-800 drop-shadow-lg shadow-slate-400 {menuOpen ? '' : 'rounded-b-lg'} p-2">
    <a class="flex flex-row" href="/">
        <img class="w-16 xl:w-20 h-16 xl:h-20" src="/shoun.png" alt="">
        <div class="flex-initial block xl:block md:hidden">
            <h1 class="text-2xl font-semibold">FemSho Archive</h1>
            <h3>Place for all things FemSho!</h3>
        </div>
    </a>
    <button class="block md:hidden mr-5" on:click={() => {menuOpen = !menuOpen;}}><Fa icon={faBars} scale=2 /></button>
    <div class="{menuOpen ? 'flex' : 'hidden'} flex-col fixed top-20 left-0 w-full min-h-full bg-slate-100 dark:bg-slate-700 rounded-b-lg md:block md:static md:top-auto md:left-auto md:w-auto md:bg-transparent md:dark:bg-transparent">
        <!--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_topnav_centered-->
        <nav class="flex flex-col text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row">
            {#each [
                {'url': '/', 'name': 'Home'},
                {'url': 'https://www.youtube.com/playlist?list=PLlGlAjsnlGmHkkoPqdZmpg0gHdVjkeOlr', 'name': 'Streams'},
                {'url': '/art', 'name': 'Art'},
                {'url': 'https://www.youtube.com/watch?v=cfs263JGmgE', 'name': 'Delta Time\'s Video'},
                {'url': '/fund', 'name': 'Femboy Fund'},
                {'url': '/skins', 'name': 'Minecraft Skins'},
            ] as route}
                <a class="text-xl text-nowrap ml-2 'shadow-slate-500' drop-shadow-sm m-1 hover:underline underline-offset-4" on:click={() => {menuOpen = false;}} href="{route.url}">{route.name}</a>
            {/each}
        </nav>
        <div class="flex flex-row align-middle justify-center">
            <button class="py-4 xl:py-8 ml-3 lg:mr-5 mr-3" on:click={toggleColors}><Fa icon={icon} scale=2/></button>
            {#each [
                {'url': 'https://github.com/femshoarchive/femshoarchive.github.io', 'icon': faGithub}
            ]
            as route}
                <button class="py-4 xl:py-8 ml-3 lg:mr-5 mr-3"><a href="{route.url}"><Fa icon={route.icon} scale=2/></a></button>
            {/each}
        </div>
    </div>
</header>