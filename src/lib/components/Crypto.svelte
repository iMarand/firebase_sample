<script>
    const cryptoSymbols = [
        { symbol: "TSLA", change: "+2.45%", price: "$387.42" },
        { symbol: "AMD", change: "+2.45%", price: "$387.42" },
        { symbol: "NVDA", change: "+2.45%", price: "$387.42" },
    ];
</script>

<div class="rounded-lg border border-gray-300 bg-card">
    <div class="flex items-center justify-between p-4">
        <h3 class="font-semibold">Crypto Coin Screener</h3>
        <button class="text-blue-600">View</button>
    </div>
    <hr class="border-t" />
    <div class="p-4">
        <div class="space-y-4">
            {#each cryptoSymbols as { symbol, change, price }}
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="h-8 w-8 rounded bg-muted" />
                        <span class="font-medium">{symbol}</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-green-600">{change}</span>
                        <span>{price}</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
