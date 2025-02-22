<script>
	// @ts-nocheck

	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import Aside from "./Aside.svelte";

	let { children } = $props();
</script>

<main>
	
	<Aside />

	<main class="pl-64">
		<Header />
		{@render children()}
		<!-- <Footer /> -->
	</main>

</main>