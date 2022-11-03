<script lang="ts">
  import { ROUTES } from '$lib/config'

  import content from '$lib/stores/content'

  $: hero = $content.sections.hero
</script>

<section id="hero">
  <h1 class="heading">{hero.heading}</h1>
  <p class="subheading">{hero.subheading}</p>
  <div class="CTAs">
    <a class="button lg" href={ROUTES.SERVICES}>{hero.actions.services}</a>
    <a class="button secondary lg" href={ROUTES.PORTFOLIO}>{hero.actions.portfolio}</a>
  </div>
  <div class="image"><img src="./assets/hero-image.png" alt="Figure" /></div>
</section>

<style lang="scss">
  section {
    --hero-heading-size: clamp(2rem, 7vmin, 5rem);
    --hero-subheading-size: clamp(1rem, 2vmin, 2rem);

    @include section;

    height: 100vh;

    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;

    // single column layout for mobile
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, auto);
    grid-template-areas:
      'headg'
      'subhd'
      'image'
      'ctas ';
    column-gap: 5vw;

    // two column layout for desktop screens
    @include md {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'headg image'
        'subhd image'
        'ctas  image';
    }
  }

  .heading {
    grid-area: headg;
    font-size: var(--hero-heading-size);
    font-weight: 600;
    max-width: 30em;
    line-height: 0.85;
    margin-bottom: 1em;
  }

  .subheading {
    grid-area: subhd;
    font-size: var(--hero-subheading-size);
    font-family: Montserrat;
    max-width: 30em;

    @include sm {
      margin-bottom: 5em;
    }
  }

  .CTAs {
    grid-area: ctas;
    justify-self: start;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @include sm {
      flex-direction: row;
    }
  }

  .image {
    grid-area: image;
    display: flex;
    justify-content: end;
    height: 30vh;
    width: 100%;

    @include md {
      height: 100%;
      width: unset;
    }

    img {
      object-fit: contain;
      transform: translate(35%);
      @include sm {
        transform: translate(0);
      }
    }
  }
</style>
