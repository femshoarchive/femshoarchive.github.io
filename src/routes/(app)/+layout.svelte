<div id="nag">Next version including rebranding is being worked on, be patient!</div>
<header>
    <div>
        <img src="/shoun.png" alt="Original FemShoe drawing">
        <div>
            <h1>FemSho Archive</h1>
            <h3>Place for all things FemSho!</h3>
        </div>
    </div>
    <nav>
        {#each [
            {'url': '/', 'name': 'Home'},
            {'url': 'https://www.youtube.com/playlist?list=PLlGlAjsnlGmHkkoPqdZmpg0gHdVjkeOlr', 'name': 'Streams'},
            {'url': '/art', 'name': 'Art'},
            {'url': 'https://www.youtube.com/watch?v=cfs263JGmgE', 'name': 'Delta Time\'s Video'},
            {'url': '/fund', 'name': 'Femboy Fund'},
            {'url': '/skins', 'name': 'Minecraft Skins'},
        ] as route}
            <a href="{route.url}">{route.name}</a>
        {/each}
    </nav>
</header>

<section id="content">
    <slot/>
</section>

<style>
#nag {
    background-color: orange;
    padding: 10px;
}

header {
    background-color: #ffffff;
    padding: 15px;
    padding-top: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

header div {
    display: flex;
}

header div div {
    display: initial;
}

header div img {
    aspect-ratio: calc(1840 / 2298);
    height: 128px;
}

header div div h3 {
    font-weight: 200;
}

header nav a {
    font-weight: 400;
    text-decoration: none;
    text-shadow: #eaeaea 1px 2px;
    margin-right: 10px;
}

section#content {
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
    background-color: #ffffff;
    margin-top: 10px;
    padding: 8px;
}
</style>