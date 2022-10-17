<script lang="ts">
  import type { Service } from '../../types'

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
    display: flex;
    gap: 1rem;
  }

  label {
    display: flex;
    align-items: center;

    font-size: clamp(1.1rem, 3vw, 1.6rem);
    padding: 0.5em 0.5em;
    border-radius: 5px;
    gap: 0.5em;

    color: #fff7;
    font-weight: 500;
    @include hover(lighten) {
      color: #fffa;
    }

    h3 {
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: 1;
    }

    img {
      height: 1em;
    }
  }

  // style labels when input checked
  input:checked + label {
    color: #fff;
  }

  input {
    display: none;
  }
</style>
