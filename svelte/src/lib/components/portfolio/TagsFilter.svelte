<script lang="ts">
  import { scale } from 'svelte/transition'
  import type { Tag } from '$lib/types'

  export let value: string[]
  export let tags: Tag[]
</script>

<ul class="services">
  {#each tags as tag (tag)}
    {@const id = `tag-${tag}`}
    <!-- TODO: prevent other tags' jumping when tags change -->

    <li transition:scale|local>
      <input type="checkbox" {id} bind:group={value} name="tags" value={tag} checked />
      <label for={id}>
        <span class="chip md">{tag}</span>
      </label>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    @include flex(false, top, start);
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  // style labels when input checked
  input:checked + label > span {
    background-color: #fff8;
  }

  input {
    display: none;
  }
</style>
