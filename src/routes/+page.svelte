<script>
    import projects from '../lib/data/projects.json'
</script>

<svelte:head>
    <title>Cormac Williamson</title>
</svelte:head>

<div class="bg-primary h-screen w-full grid grid-cols-3 grid-rows-3">
    <nav class="col-span-3">
       <ul class="float-right flex flex-row pt-8">
            <li class="text-primary-accent uppercase font-bold mr-9 cursor-pointer">
                <a href="#about">About</a>
            </li>
            <li class="text-primary-accent uppercase font-bold mr-9 cursor-pointer">
                <a href="#services">
                    Services
                </a>
            </li>
            <li class="text-primary-accent uppercase font-bold mr-9 cursor-pointer">
                <a href="#projects">
                    Projects
                </a>
            </li>
       </ul> 
    </nav>
    <div class="row-start-2 col-span-3 flex items-center justify-center">
        <div>
            <h1 class="align-middle text-center font-bold text-primary-accent uppercase text-7xl">Cormac Williamson</h1>
            <h2 class="uppercase text-center text-primary-accent text-3xl">Full Stack Software Engineer</h2>
        </div>
    </div>
</div>

<div class="flex flex-row">
    <div class="flex-1 bg-primary h-7"></div>
    <div class="flex-1 bg-primary-accent"></div>
    <div class="flex-1 bg-secondary"></div>
    <div class="flex-1 bg-secondary-accent"></div>
</div>

<section id="about" class="bg-secondary h-screen w-full flex justify-center">
    <div class="h-20 px-16">
        <h1 class="font-bold text-secondary-accent uppercase text-7xl mt-32">I WANT TO HELP YOU GET TO WHERE YOU WANT TO GO WITH YOUR TECHNICAL PROBLEMS</h1>
        <p class="text-white">Full Stack Software Engineer</p>
    </div>
</section>

<section id="projects">
    <h1 class="text-center font-bold text-primary-accent uppercase text-7xl mt-10 mb-5">Projects</h1>

    {#each projects as { title, description, codeUrl, viewUrl, img }, i}
		<div class="px-24 flex flex-row mt-14">
            <div class="p-3 border-primary-accent border-2 w-128">
                <img src="/img/{img}" alt="" srcset="">
            </div>
            <div class="px-20 flex items-center">
                <div>
                    <h3 class="font-bold text-2xl">{title}</h3>
                    <p class="text-lg">{description}</p>
                    <div class="mt-10">
                        {#if viewUrl}
                        <a class="border-b-4 border-b-secondary hover:border-b-primary-accent transition-all uppercase font-bold text-lg cursor-pointer" href="{viewUrl}">View</a>
                        {/if}
                        {#if codeUrl}
                        <a class="border-b-4 border-b-primary hover:border-b-primary-accent transition-all uppercase font-bold text-lg cursor-pointer ml-5" href="{codeUrl}" target="_blank">Code</a>
                        {/if}
                    </div>
                </div>
            </div>


        </div>
	{/each}
</section>