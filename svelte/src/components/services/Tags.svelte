<script lang="ts">
  import type { Tag } from '../../types'
  export let tags: Tag[]
</script>

<ul>
  {#each tags as tag}
    <li>
      <button class="chip">{tag}</button>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    @include flex(false, top, start);
    gap: 0.5rem;
    margin: 1rem 0;
  }
</style>
