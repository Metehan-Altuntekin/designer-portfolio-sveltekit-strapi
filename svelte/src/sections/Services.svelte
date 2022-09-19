<script lang="ts">
  import type { Service as TypeService } from '../types'
  import services from '../stores/services'

  import Service from '../components/services/Service.svelte'
  import { onMount } from 'svelte'
</script>

<section id="services">
  {#each $services as service}
    <Service {service} />
  {/each}
</section>

<style lang="scss">
  section {
    @include section;
  }
</style>
