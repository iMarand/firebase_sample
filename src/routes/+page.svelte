<script>
	// @ts-nocheck
	import Grid from "$lib/components/Grid.svelte";
	import Crypto from "$lib/components/Crypto.svelte";
	import Tutorials from "$lib/components/Tutorials.svelte";

	const actions = {
		fetchData: function() {
			fetch("/server/fetch_data", {
				method: "GET"
			}).then(response => response.json()).then(data => {
				// Show Fetched Data
				console.log(data);
			}).catch(err => {
				console.error(err);
			})
		}
	}
</script>

<main class="p-6">
	
	<Grid />
	<div class="grid gap-3 grid-cols-2">
		<Crypto />
		<Tutorials />
	</div>

	<button class="border-1 rounded-lg bg-gray-200 text-green-700 px-3" onclick="{actions.fetchData}">Get Data Online</button>
</main>