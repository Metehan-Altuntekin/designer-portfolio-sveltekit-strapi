<script lang="ts">
  import type { Skill } from '../../types'

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
