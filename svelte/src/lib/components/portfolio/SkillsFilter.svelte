<script lang="ts">
  import type { Skill } from '$lib/types'

  export let value: number[]
  export let skills: Skill[]
</script>

<ul class="services">
  {#each skills as skill (skill.id)}
    {@const id = `skill-${skill.id}`}
    <li>
      <input type="checkbox" {id} bind:group={value} name="skills" value={skill.id} checked />
      <label for={id}>
        <img src={skill.largeIcon} alt={skill.name} title={skill.name} />
      </label>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    --size: clamp(2rem, 3vw, 3rem);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: calc(var(--size) * 0.1) 0;
  }

  label {
    display: flex;
    align-items: center;
  }

  img {
    height: var(--size);

    filter: brightness(0.4);
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  // style labels when input checked
  input:checked + label > img {
    filter: brightness(1);
  }

  input {
    display: none;
  }
</style>
