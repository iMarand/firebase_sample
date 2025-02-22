<script>
    import { ChevronRight } from "lucide-svelte";

    const tools = [
        {
            title: "Screeners",
            description: "Find anything with a simple scan",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-81fb13a7776faa5e78bdc1b52fe71d59-hWApgj5EBQPhqANXt3wAxKUCru6bd6.webp",
        },
        {
            title: "Supercharts",
            description: "One terminal to rule them all",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-81fb13a7776faa5e78bdc1b52fe71d59-hWApgj5EBQPhqANXt3wAxKUCru6bd6.webp",
        },
        {
            title: "Calendars",
            description: "Explore the worlds financial events",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-81fb13a7776faa5e78bdc1b52fe71d59-hWApgj5EBQPhqANXt3wAxKUCru6bd6.webp",
        },
        {
            title: "News Flow",
            description: "What's happening right now",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-81fb13a7776faa5e78bdc1b52fe71d59-hWApgj5EBQPhqANXt3wAxKUCru6bd6.webp",
        },
        {
            title: "Options",
            description: "Build your best strategy",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-81fb13a7776faa5e78bdc1b52fe71d59-hWApgj5EBQPhqANXt3wAxKUCru6bd6.webp",
        },
    ];
</script>

<div class="mb-8">
    <div class="mb-6 flex items-center justify-between">
        <h2 class="text-lg font-semibold">Tools</h2>
        <button class="text-blue-600">View all</button>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {#each tools as tool}
            <div class="group relative border-gray-300 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
                <div class="mb-4 aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <img src={tool.image || "/placeholder.svg"} alt={tool.title} class="h-full w-full object-cover"/>
                </div>
                <h3 class="font-semibold">{tool.title}</h3>
                <p class="text-sm text-muted-foreground">{tool.description}</p>
                <button class="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100 p-2 rounded-full hover:bg-gray-100">
                    <ChevronRight class="h-4 w-4" />
                </button>
            </div>
        {/each}
    </div>
</div>
