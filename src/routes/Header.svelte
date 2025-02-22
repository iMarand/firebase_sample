<script>
    import { Bell, Search, Settings, HelpCircle, Plus } from "lucide-svelte";
</script>

<header class="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-300 bg-background px-4">
    <div class="flex items-center gap-4">
        <div class="avatar">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-81fb13a7776faa5e78bdc1b52fe71d59-hWApgj5EBQPhqANXt3wAxKUCru6bd6.webp" alt="User"
                class="h-10 w-10 rounded-full"/>
        </div>
        <div>
            <div class="flex items-center gap-2">
                <span class="font-semibold">Aliah Lane</span>
                <span class="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-700">PRO</span>
            </div>
            <span class="text-sm text-muted-foreground">@left_finexp</span>
        </div>
        <button class="ml-4 flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white">Deposit
            <Plus class="h-4 w-4" />
        </button>
    </div>
    <div class="flex items-center gap-4">
        <div class="relative">
            <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
            <input class="w-64 rounded border pl-9 py-2" placeholder="Search here..."/>
        </div>
        <button class="p-2 hover:bg-gray-100 rounded-full">
            <Bell class="h-5 w-5" />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-full">
            <Settings class="h-5 w-5" />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-full">
            <HelpCircle class="h-5 w-5" />
            <span class="sr-only">Help</span>
        </button>
    </div>
</header>
