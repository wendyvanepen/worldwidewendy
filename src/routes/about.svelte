<script>
  import Card from "../components/Card.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About me</h1>

<Card>
  <span slot="name">Wendy van Epen</span>

  <span slot="address">
    42 Wallaby Way
    <br />
    Sydney
  </span>
</Card>
<p />
