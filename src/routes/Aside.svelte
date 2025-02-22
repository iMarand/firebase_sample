<script>
    import { Search, Bell, ChevronRight, Settings } from "lucide-svelte";

    const navItems = [
        { name: "Explore", icon: Search },
        { name: "Watchlist", icon: Bell },
        { name: "Investments", icon: ChevronRight },
        { name: "Markets", icon: ChevronRight },
        { name: "Tools", icon: Settings, active: true },
    ];
</script>

<div class="fixed left-0 top-0 z-30 h-screen w-64 border-r border-gray-300 bg-background">
    <div class="flex h-16 items-center gap-2 px-4">
        <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white"> C</div>
            <span class="text-xl font-semibold">Credly</span>
        </div>
    </div>
    <nav class="space-y-1 px-2">
        {#each navItems as item}
            <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md {item.active ? 'bg-gray-100' : 'hover:bg-gray-50'}">
                <svelte:component this={item.icon} class="h-4 w-4" /> {item.name}
            </button>
        {/each}
    </nav>
</div>
