<script lang="ts">
  import type { Tag } from '../../types'

  export let value: string[]
  export let tags: Tag[]
</script>

<ul class="services">
  {#each tags as tag (tag)}
    {@const id = `tag-${tag}`}
    <li>
      <input type="checkbox" {id} bind:group={value} name="tags" value={tag} checked />
      <label for={id}>
        <span class="chip md">{tag}</span>
      </label>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    --size: clamp(2rem, 5vh, 4rem);
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: calc(var(--size) * 0.1) 0;
  }

  label {
    display: flex;
    align-items: center;

    font-size: clamp(1.1rem, 3vw, 1.6rem);
    padding: 0.5em 0.5em;
    border-radius: 5px;
  }

  // style labels when input checked
  input:checked + label > span {
    filter: brightness(1);
  }

  input {
    display: none;
  }
</style>
