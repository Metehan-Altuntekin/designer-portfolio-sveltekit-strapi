<script lang="ts">
  // Sections
  import Hero from './Hero.svelte'
  import Services from './Services.svelte'
  import About from './About.svelte'
  import Contact from './Contact.svelte'
  import Friends from './Friends.svelte'

  import { OWNER } from '$lib/config'

  const fullName = OWNER.name + ' ' + OWNER.surname
</script>

<svelte:head>
  <title>{fullName}</title>
</svelte:head>

<Hero />
<Services />
<About />
<Contact />
<Friends />

<style lang="scss">
</style>
