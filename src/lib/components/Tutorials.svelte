<script>
    import { ChevronRight } from "lucide-svelte";

    const tutorials = [
        "The AI Revolution in Fintech: Smarter, Faster, Riskier?",
        "The Dark Side of Fintech: Unmasking Hidden Risks",
        "Decoding DeFi: The Future of Decentralized Finance",
    ];
</script>

<div class="rounded-lg border border-gray-300 bg-card">
    <div class="flex items-center justify-between p-4">
        <h3 class="font-semibold">Tutorials</h3>
        <button class="text-blue-600">View all</button>
    </div>
    <hr class="border-t" />
    <div class="space-y-4 p-4">
        {#each tutorials as title}
            <div class="flex items-center gap-4">
                <button class="rounded-full p-2 bg-gray-100">
                    <ChevronRight class="h-4 w-4" />
                </button>
                <div>
                    <h4 class="font-medium">{title}</h4>
                    <div class="flex items-center gap-2">
                        <div class="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                            U
                        </div>
                        <span class="text-sm text-muted-foreground">3 others</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
