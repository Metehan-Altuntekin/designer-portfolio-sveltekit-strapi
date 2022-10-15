<script lang="ts">
  import './style/global.css'
  import MainLayout from './layouts/MainLayout.svelte'
  // Sections
  import Hero from './sections/Hero.svelte'
  import Services from './sections/Services.svelte'
  import About from './sections/About.svelte'
  import Contact from './sections/Contact.svelte'
  import Friends from './sections/Friends.svelte'

  import Portfolio from './sections/Portfolio.svelte'
</script>

<MainLayout>
  <Hero />
  <Services />
  <About />
  <Contact />
  <Friends />
  <Portfolio />
</MainLayout>

<style lang="scss">
</style>
