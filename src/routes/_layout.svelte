<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: inherit;
    max-width: 56em;
    background-color: white;
    padding: 4em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Header />
<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
