<script lang="ts">
  import type { Friend } from '$lib/types'

  export let friend: Friend

  const { name, image, roles, link } = friend
</script>

<a href={link} target="_blank" title={'Visit ' + name}>
  <figure>
    <img src={image} alt={`Picture of ${name}`} />
    <figcaption>
      <h1>{name}</h1>
      <span>
        {roles}
      </span>
    </figcaption>
  </figure>
</a>

<style lang="scss">
  * {
    text-align: center;
  }
  figure {
    --image-size: 64px;

    width: 220px;
    height: 200px;
    padding: 20px;
    gap: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #fff1;
    border: 1px solid #7774;
    transition: 0.2s;

    @include hover;
  }

  img {
    height: var(--image-size);
    width: var(--image-size);
    border-radius: 9999px;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.015em;
    line-height: 1;
    margin-bottom: 0.5em;
  }

  figcaption span {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-primary);
    white-space: pre-wrap;

    text-align: center;
    line-height: 1.1;
    margin-right: 1em;
    margin-left: 1em;
  }
</style>
