<header class="flex flex-grow bg-slate-50 dark:bg-slate-800 drop-shadow-lg shadow-slate-400 rounded-b-lg p-2">
    <a class="flex flex-row" href="/">
        <img class="w-16 sm:w-20" src="/shoun.png" alt="">
        <div class="flex-initial align-center invisible sm:visible">
            <h1 class="text-2xl font-semibold">FemSho Archive</h1>
            <h3>Place for all things FemSho!</h3>
        </div>
    </a>
    <nav>
        {#each [
            {'url': '/', 'name': 'Home'},
            {'url': 'https://www.youtube.com/playlist?list=PLlGlAjsnlGmHkkoPqdZmpg0gHdVjkeOlr', 'name': 'Streams'},
            {'url': '/art', 'name': 'Art'},
            {'url': 'https://www.youtube.com/watch?v=cfs263JGmgE', 'name': 'Delta Time\'s Video'},
            {'url': '/fund', 'name': 'Femboy Fund'},
            {'url': '/skins', 'name': 'Minecraft Skins'},
        ] as route}
            <a class="text-blue-600 dark:text-blue-400 shadow-slate-500 drop-shadow-sm m-1" href="{route.url}">{route.name}</a>
        {/each}
    </nav>
    <div>
        
    </div>
</header>