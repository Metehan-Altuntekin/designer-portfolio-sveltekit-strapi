<script lang="ts">
  import type { Service } from '$lib/types'

  export let value: number[]
  export let services: Service[]
</script>

<ul class="services">
  {#each services as service (service.id)}
    {@const id = `service-${service.id}`}
    <li>
      <input type="checkbox" {id} bind:group={value} name="services" value={service.id} />
      <label for={id}>
        <img src={service.icon} alt="" aria-hidden />
        <h3>{service.name}</h3>
      </label>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    --size: clamp(1rem, 2.5vw, 1.5rem);
    display: flex;
    gap: calc(var(--size) / 2);
    flex-wrap: wrap;
    // grid-template-columns: repeat(auto-fit, 1fr);
    align-items: center;
    justify-content: flex-start;
    flex-grow: 0;
  }

  label {
    display: flex;
    align-items: center;

    font-size: var(--size);
    gap: 0.25em;

    color: #fff;
    font-weight: 500;

    transition: 0.3s;
    filter: brightness(0.7);

    &:hover {
      filter: brightness(0.9);
    }

    h3 {
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: 1;
      white-space: nowrap;
    }

    img {
      height: 1.2em;
    }
  }

  // style labels when input checked
  input:checked + label {
    filter: brightness(1);
  }

  input {
    display: none;
  }
</style>
